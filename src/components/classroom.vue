<template>
  <div>
      <div class="app">
          <div class="Container">
              <div class="loutLeft">

                <div class="LeftTOP">
                    <div class="LeftTOPdetails">
                        <div class="detailsL">
                            <span>完成教学课堂</span>
                            <p v-text="`${classroomNumber}`"></p>
                        </div>
                        <div class="detailsR">
                             <span>课堂目标达成值</span>
                            <p v-text="`${targetNumber}`"></p>
                        </div>
                    </div>
                    <div class="LeftTOPdetails">
                        <div class="detailsL">
                            <span>优质课堂数</span>
                            <p v-text="`${highQuality}`"></p>
                        </div>
                        <div class="detailsR">
                             <span>教学质量综合评分</span>
                            <p v-text="`${ComprehensiveScore}`"></p>
                        </div>
                    </div>
                    <div class="LeftTOPdetails">
                        <div class="detailsL">
                            <span>课堂平均到课率</span>
                            <p v-text="`${AverageClass}`"></p>
                        </div>
                        <div class="detailsR">
                             <span>课堂平均参与度</span>
                            <p v-text="`${AverageparticipateIn}`"></p>
                        </div>
                    </div>
                </div>
                <div class="LeftBTM">

                    <div class="LeftBTMtitle">
                        <span >正在上课的课堂（实时）</span>
                        <i class="iconfont icon-yuandianzhong"></i>
                        <span v-text="AttendClassNumber" ></span>
                    </div>
                    <div class="LeftBTMlist">
                        <span >学校</span>
                        <i>课堂名</i>
                        <p >教师名</p>
                    </div>
                    <!-- 循环 -->
                    <div class="LeftBTMlist" v-for="(item,index) in inClassList" :key="index">
                        <span >{{item.school}}</span>
                        <i>{{item.name}}</i>
                        <p >{{item.teacher}}</p>
                    </div>

                </div>
              </div>
              <div class="loutCenter">
                    <div class="loutCtitle">
                        <div class="imgDiv">
                        <h3>广西中职课堂教学质量监控系统</h3>
                        </div>
                    </div>

                    <div class="StateSwitching">
                        <div :class="bgSwitch?'bgSwitch1':'bgSwitch2'">
                          <span class="left" @click="$router.push({path:'/'})">总体情况</span>
                          <span class="right" @click="$router.push({path:'/classroom'})">课堂监控</span>
                        </div>
                    </div>

                    <div class="ParticipationDetails">
                        <div class="MapLocation">
                            <img src="../../static/images/baiseshi.png" alt="" class="Map1" @click="cehis">
                            <img src="../../static/images/hechishi.png" alt="" class="Map2" @click="cehis">
                            <img src="../../static/images/liuzhoushi.png" alt="" class="Map3" @click="cehis">
                            <img src="../../static/images/guilingshi.png" alt="" class="Map4" @click="cehis">
                            <img src="../../static/images/congzuoshi.png" alt="" class="Map5" @click="cehis">
                            <img src="../../static/images/nanningshi.png" alt="" class="Map6" @click="cehis">
                            <img src="../../static/images/laipingshi.png" alt="" class="Map7" @click="cehis">
                            <img src="../../static/images/hezhoushi.png" alt="" class="Map8" @click="cehis">
                            <img src="../../static/images/guigangshi.png" alt="" class="Map9" @click="cehis">
                            <img src="../../static/images/qinzhoushi.png" alt="" class="Map10" @click="cehis">
                            <img src="../../static/images/fangchenggangshi.png" alt="" class="Map11" @click="cehis">
                            <img src="../../static/images/beihaihsi.png" alt="" class="Map12" @click="cehis">
                            <img src="../../static/images/yulingshi.png" alt="" class="Map13" @click="cehis">
                            <img src="../../static/images/wuzhoushi.png" alt="" class="Map14" @click="cehis">
                        </div>
                        <div class="Details2L">
                            <p>优质课堂数</p>
                            <span :style="`background: -webkit-linear-gradient(left, #004d92 ${bgcolorA},#67affe ${bgcolorB})`"></span>
                            <p >多-少</p>
                        </div>
                    </div>
              </div>
              <div class="loutRight">
                  <div class="distribution">
                    <div id="myecharts1"></div>
                  </div>
                  <div class="RightBTM">

                    <div class="LeftBTMtitle">
                        <span >优质课堂排行榜</span>
                    </div>
                    <div class="LeftBTMlist">
                        <span >排名</span>
                        <i>学校</i>
                        <p >优质课堂数</p>
                        <b>优质课堂率</b>
                    </div>
                    <!-- 循环 -->
                    <div class="LeftBTMlist" v-for="(item,index) in qualityClassList" :key="index">
                        <span >{{index+1}}</span>
                        <i @click="$router.push({path:'/DataStatistics',query:{name:item.school}})">{{item.school}}</i>
                        <p >{{item.classCount}}</p>
                        <b v-text="`${item.classRate}`"></b>
                    </div>

                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bgSwitch: false,
      bgcolorA: '40%', // 动态数据
      bgcolorB: '60%', // 动态数据
      echartsDataX: ['桂林', '南宁', '济南', '成都', '杭州'],
      echartsDataY: [{value: 335, name: '桂林'}, {value: 310, name: '南宁'}, {value: 234, name: '济南'}, {value: 135, name: '成都'}, {value: 1548, name: '杭州'}],
      classroomNumber: 983,
      targetNumber: 17.3,
      highQuality: 37,
      ComprehensiveScore: 87,
      AverageClass: '98.3%',
      AverageparticipateIn: '87.25%',
      AttendClassNumber: 5028,
      inClassList: [
        {school: '来宾市武宣职业教育中心', name: '语文', teacher: '廖英群'},
        {school: '来宾市武宣职业教育中心', name: '汽车文化', teacher: '黄高明'},
        {school: '来宾市武宣职业教育中心', name: '平面设计', teacher: '陈艳莹'},
        {school: '来宾市武宣职业教育中心', name: '计算机应用基础', teacher: '朱家华'},
        {school: '广西交通技师学院', name: '文书档案', teacher: '吴玉萍'},
        {school: '广西交通技师学院', name: '数学', teacher: '马洛轩'},
        {school: '广西交通技师学院', name: '基础会计', teacher: '卢明茹'},
        {school: '贵港市职业教育中心', name: '配送作业', teacher: '闫初宇'},
        {school: '贵港市职业教育中心', name: '网店运营', teacher: '杨晓越'}
      ],
      qualityClassList: [
        {school: '来宾市武宣职业教育中心', classCount: 12, classRate: "25%"},
        {school: '广西机电工业学校', classCount: 4, classRate:"8%"},
        {school: '贵港市职业教育中心', classCount: 3, classRate: "6%"},
        {school: '河池市卫生学校', classCount: 0, classRate: 0},
        {school: '桂林市第二技工学校', classCount: 0, classRate: 0},
        {school: '玉林市第一职业中等院校', classCount: 0, classRate: 0},
        {school: '灵山职业教育学校', classCount: 0, classRate: 0},
        {school: '南宁市第四职业技术学校', classCount: 0, classRate: 0},
        {school: '河池市巴马民族师范学校', classCount: 0, classRate: 0},
        {school: '广西工贸职业技术学校', classCount: 0, classRate: 0},
        {school: '广西百色农业学校', classCount: 0, classRate: 0},
        {school: '玉林技师学院', classCount: 0, classRate: 0},
        {school: '百色市右江区职业技术学校', classCount: 0, classRate: 0},
        {school: '广西交通技师学院', classCount: 0, classRate: 0},
        {school: '北海市卫生学校', classCount: 0, classRate: 0},
        {school: '广西科技大学附属卫生学校', classCount: 0, classRate: 0},
        {school: '广西钦州农业学校', classCount: 0, classRate: 0},
        {school: '百色市机电工程学校', classCount: 0, classRate: 0},
        {school: '百色市财经职业技术学校', classCount: 0, classRate: 0},
        {school: '北部湾职业技术学校', classCount: 0, classRate: 0},
        {school: '南宁市第三职业技术学校', classCount: 0, classRate: 0},
        {school: '广西工商技师学院', classCount: 0, classRate: 0},
        {school: '广西理工职业技术学校', classCount: 0, classRate: 0},
        {school: '广西钦州商贸学校', classCount: 0, classRate: 0},
        {school: '梧州市城市建设技工学校', classCount: 0, classRate: 0},
        {school: '崇左市职业技术学校', classCount: 0, classRate: 0},
        {school: '柳州市交通学校', classCount: 0, classRate: 0},
        {school: '广西壮族自治区体育运动学校', classCount: 0, classRate: 0},
        {school: '广西玉林农业学校', classCount: 0, classRate: 0},
        {school: '桂平市第一中等职业技术学校', classCount: 0, classRate: 0},
        {school: '广西南宁技师学院', classCount: 0, classRate: 0}
      ]
    }
  },
  methods: {
    cehis () {
    },
    getmyecharts1 () {
      var myChart = this.$echarts.init(document.getElementById('myecharts1'))
      var option = {
        color: ['#3a6dff', '#3a9bfd', '#4bedff', '#37ffed', '#5c3dff'],
        title: {
          text: '优质课堂分布情况',
          x: 'center',
          textStyle: {
            color: '#fff',
            fontWeight: 500,
            fontSize: 20,
            fontFamily: '思源黑体 CN Bold'

          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          left: '20%',
          top: '10%',
          data: this.echartsDataX,
          textStyle: {
            color: '#fff'
          },
          icon: 'circle'
        },
        series: [
          {
            name: '优质课堂分布情况',
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: this.echartsDataY,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // myChart.setOption(option);
      myChart.setOption(option, window.onresize = myChart.resize)
    }

  },
  mounted () {
    this.getmyecharts1()
  },
  computed: {

  }

}
</script>

<style scoped>
  .app{
    display:block;
    width:1920px;
    height: 1080px;
    background:url('../../static/images/homebackground.jpg');

  }
  .Container{
    position: relative;
    box-sizing: border-box;
    display:flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
    .Container .loutLeft{

    box-sizing: border-box;
    height: 100%;
     width: 484px;
    overflow: hidden;

  }
  .Container .loutCenter{
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    width: 916px;

  }
  .Container .loutRight{
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

  }
  .loutLeft .LeftTOP{
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
     margin-top: 93px;
  }

  .loutLeft .LeftTOP .LeftTOPdetails{
     display: flex;
     justify-content: space-between;
     align-items: center;
     box-sizing: border-box;
     margin-bottom: 20px;
  }
  .loutLeft .LeftTOP .LeftTOPdetails .detailsL{
     box-sizing: border-box;
     width: 210px;height:76px;
     text-align: center;
     background: #0073e5;
     padding-top: 8px ;
     border-radius: 6px;
     margin-right: 26px;
  }
  .loutLeft .LeftTOP .LeftTOPdetails .detailsL span{

    color:#fff;
    font-size: 18px;
    font-family:思源黑体 CN Bold;
    font-weight: 500;
  }
  .loutLeft .LeftTOP .LeftTOPdetails .detailsL p{
     margin-bottom: 0;
     font-family:Arial;
     color:#ffb22f;
     font-weight: 600;
     font-size: 30px;

  }
  .loutLeft .LeftTOP .LeftTOPdetails .detailsR{
     box-sizing: border-box;
     width: 210px;height:76px;
     text-align: center;
     background: #0073e5;
     padding-top: 8px ;
     border-radius: 6px;
  }
  .loutLeft .LeftTOP .LeftTOPdetails .detailsR span{

    color:#fff;
    font-size: 18px;
    font-family:思源黑体 CN Bold;
    font-weight: 500;
  }
  .loutLeft .LeftTOP .LeftTOPdetails .detailsR p{
     margin-bottom: 0;
     font-family:Arial;
     color:#ffb22f;
     font-weight: 600;
     font-size: 30px;

  }
  .LeftBTM{
     margin-top: 65px;
     display: flex;
     flex-direction: column;
     box-sizing: border-box;
    width: 100%;
    height:603px;
    overflow-y: auto;
    overflow-x: hidden;
    align-items: center;
    padding: 0 15px;
  }
  .LeftBTM::-webkit-scrollbar{
     display: none;
  }
  .LeftBTM .LeftBTMtitle span{
    font-size: 20px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }
  .LeftBTM .LeftBTMtitle{
    width: 100%;
    background: #3b90e5;
    padding: 10px 0;
    border-radius: 6px 6px 0 0 ;
    text-align: center;

  }
  .LeftBTM .LeftBTMlist{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    

  }
  .LeftBTM .LeftBTMlist span{
    width: 40%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: center;

  }
  .LeftBTM .LeftBTMlist i{
    width: 40%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: center;
    font-style: normal;

  }
  .LeftBTM .LeftBTMlist p{
    width: 18%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: center;
    margin-bottom: 0;

  }
  .LeftBTM .LeftBTMlist:last-child{
    border-radius:  0 0 6px 6px;

  }
  .LeftBTM div:nth-child(even){
     background: #3b90e5;

  }
  .LeftBTM div:nth-child(odd){
    background: #398ade;

  }

    .loutCenter .loutCtitle{
    box-sizing: border-box;
    position: relative;
    justify-content: center;
    display: flex;

  }
  .loutCenter .loutCtitle .imgDiv{
    box-sizing: border-box;
    background: url(../../static/images/icon4.png);
    width: 820px;
    height:74px;

  }
    .loutCenter .loutCtitle h3{
    text-align: center;
    padding-top: 20px;
    margin-bottom: 0;
     font-size: 28px;
    font-family:思源黑体 CN Bold;
    color: #fff;

  }
    .loutCenter .StateSwitching{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .loutCenter .StateSwitching .left{
      font-size: 20px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    float: left;
    margin-left: 30px;
    cursor: pointer;
  }
  .loutCenter .StateSwitching .right{
      font-size: 20px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    float: right;
    margin-right: 30px;
    cursor: pointer;

  }

.bgSwitch1{
    box-sizing: border-box;
    background: url(../../static/images/bgSwitch1.png)no-repeat;
    margin-top: 10px;
    height:34px;width:323px;

}
.bgSwitch2{
    box-sizing: border-box;
    background: url(../../static/images/bgSwitch2.png)no-repeat;
    margin-top: 10px;
    height:34px;width:323px;
}

.ParticipationDetails .Details2L{
  box-sizing: border-box;
  align-items: center;
  display: flex;
  position: relative;
  top:642px;left:147px;

}
.ParticipationDetails .Details2L>span{
  width:80px;height:20px;
  display:inline-block;

}
.ParticipationDetails .Details2L p{
 font-size: 16px;
  font-weight: 500;
  color:#fff;
  margin:0 12px;
  display:inline-block;
  margin-bottom: 0;
}
/* ---------地图------------ */
  .Map1{
    position: absolute;
    top:292px;left:469px;
    cursor: pointer;
  }
  .Map2{
    position: absolute;
    top:269px;left:733px;
    cursor: pointer;
  }
  .Map3{
    position: absolute;
    top:264px;left:962px;
    cursor: pointer;
  }
  .Map4{
    position: absolute;
    top:250px;left:1094px;
    cursor: pointer;
  }
  .Map5{
    position: absolute;
    top:491px;left:615px;
    cursor: pointer;
  }
  .Map6{
    position: absolute;
    top:444px;left:745px;
    cursor: pointer;
  }
  .Map7{
    position: absolute;
    top:412px;left:911px;
    cursor: pointer;
  }
  .Map8{
    position: absolute;
    top:373px;left:1193px;
    cursor: pointer;
  }
  .Map9{
    position: absolute;
    top:470px;left:980px;
    cursor: pointer;
  }
  .Map10{
    position: absolute;
    top:592px;left:794px;
    cursor: pointer;
  }
  .Map11{
    position: absolute;
    top:591px;left:682px;
    cursor: pointer;
  }
  .Map12{
    position: absolute;
    top:664px;left:833px;
    cursor: pointer;
  }
  .Map13{
    position: absolute;
    top:561px;left:963px;
    cursor: pointer;
  }
  .Map14{
    position: absolute;
    top:439px;left:1138px;
    cursor: pointer;
  }
/* ---------地图------------ */
.distribution #myecharts1{
  width:524px;
  height:400px;
  display: block;
  margin-top: 90px;
  /* background: red;opacity: .5; */

}

.RightBTM{
     margin-top: 25px;
     display: flex;
     flex-direction: column;
     box-sizing: border-box;
    width: 100%;
    height:534px;
    overflow-y: auto;
    align-items: center;
    padding: 0 15px;
  }
  .RightBTM::-webkit-scrollbar{
     display: none;
  }
  .RightBTM .LeftBTMtitle span{
    font-size: 20px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    font-weight: bold;
  }
  .RightBTM .LeftBTMtitle{
    width: 100%;
    background: #3b90e5;
    padding: 10px 0;
    border-radius: 6px 6px 0 0 ;
    text-align: center;

  }
  .RightBTM .LeftBTMlist{
    width: 100%;
    height: 40px;
    display: block;
    padding-left: 15px;

  }
  .RightBTM .LeftBTMlist span{
    width: 5%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: left;
      padding: 10px 0;

  }
  .RightBTM .LeftBTMlist i{
    width: 47%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: center;
    font-style: normal;
    cursor: pointer;
    display:inline-block;
      padding: 10px 0;

  }
  .RightBTM .LeftBTMlist p{
    width:18%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: right;
    margin-bottom: 0;
    display:inline-block;
    padding: 10px 0;

  }
  .RightBTM .LeftBTMlist b{
    width: 18%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: right;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    display:inline-block;
      padding: 10px 0;

  }
  .RightBTM .LeftBTMlist:last-child{
    border-radius:  0 0 6px 6px;

  }
  .RightBTM div:nth-child(even){
     background: #3b90e5;

  }
  .RightBTM div:nth-child(odd){
    background: #398ade;

  }

</style>
