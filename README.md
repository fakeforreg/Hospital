# BlackheartedHospital

- 1.本项目基于https://github.com/langhua9527/BlackheartedHospital 的公开数据，我们尽可能的补充了医院名称中对应的URL。然后在最新版海豚浏览器的搜索结果页中插入了莆田系医院标记，制作了一个手机在线查询莆田系名单的网页。现在将数据和网页开源，并公开了数据接口。源网址为 http://cn.news.dolphin.com
- 2.本项目提供了通过城市查询莆田系网站的第三方接口，用户可以通过本接口直接查询到对应城市的莆田系医院，莆田系医院列表会及时更新
  - 对应的调用方法是:
     - http://opscn.dolphin-browser.com/dop/hospitalregion.json 查询城市列表
     - http://opscn.dolphin-browser.com/dop/hospitalsearch.json?c=北京 通过城市查询对应的莆田系医院的名称
  - demo.py提供了python的调用示例
  - src_web_example 调用以上接口提供了一个查询网站的示例，示例见截图
  - src_sosuo_example 提供了一个调用以上接口屏蔽某搜索引擎中对应医疗广告的示例，示例见截图
- 3.本接口可以用于二次开发
- 4.接口中的医院来源于网络，如果有医院有异议，请直接联系alex@dolphin.com
- 5.该项目基于BSD许可证开发

# 版本1.0beta

## 截图示例

![截图](https://github.com/TeamDolphin/BlackheartedHospital/blob/master/img/img2.jpg)
![截图](https://github.com/TeamDolphin/BlackheartedHospital/blob/master/img/img3.jpg)


# 附莆田系医院列表和对应的网址

## 上海

- 上海市闵行区中医院
  - 网址 tcmmh.com
- 上海华美美莱整形医院
  - 网址 mylike.com;shmylike.com
- 上海万众医院
  - 网址 wz120.cc
- 上海安真医院
  - 网址 2062.hos.zx7b.com
- 上海福华医院
  - 网址 2059.hos.zx7b.com
- 上海玛丽女子医院
  - 网址 mary120.cn
- 上海真爱女子医院
  - 网址 shzazx.com
- 上海心脏病医院
- 上海沪申五官科医院
  - 网址 hs5g.com
- 上海远大心胸医院
  - 网址 yodak.netabout
- 上海仁爱医院
  - 网址 renai.cn
- 上海天大医疗美容医院
  - 网址 tida120.com;tida.sh.cn
- 上海博爱医院
  - 网址 shlf.tw
- 上海新虹桥医院
  - 网址 1213610172.etlong.com
- 上海九龙男子医院
  - 网址 long120.cn
- 上海城市女子医院
- 上海西郊骨科医院
  - 网址 shgkb.com
- 上海真美妇科医院
  - 网址 fukezm.com
- 上海南浦妇科医院
  - 网址 fyjx.org
- 上海虹桥医院
  - 网址 shhqyy.com
- 上海健桥医院
  - 网址 jqbyby.com
- 上海长江医院
  - 网址 buyunbuyu.voc.com.cn;shcjhospital.com
- 解放军411医院
  - 网址 411yy.com
- 上海阳光中医医院
- 上海英港泌尿外科医院
  - 网址 021pfb.net;shyg91.com
- 上海阿波罗男子医院
  - 网址 mens120.com;haonank.com;abl120.com
- 上海玫瑰女子医院
  - 网址 shrose.cn
- 上海康新医院
- 上海圣爱医院
  - 网址 shsayy.com
- 上海同德医院
  - 网址 shtdyy.com
- 上海安平医院
  - 网址 apyy120.com
- 江东泌尿外科医院
  - 网址 shjdyy.com;jd.fwgk120.com;baidu.ndxl01.com
- 上海九州泌尿医院
  - 网址 sh9z.com
- 上海青城医院
  - 网址 qpqcyy.com
- 上海博大医院
  - 网址 boda120.com
- 上海中亚医院
  - 网址 bhjchouse.com;zywuguan.com

## 北京

- 北京华美美莱整形医院
  - 网址 bjmylike.com
- 北京俪人女子医院
- 北京北海医院
  - 网址 bh01.com;bjbhfk.com
- 北京前海股骨头医院
  - 网址 qianhai.com
- 北京市慧慈医院
  - 网址 huicihospital.com
- 北京五洲女子医院
  - 网址 bjwzfh.com;wuzhouyiyuan.com
- 北京圣保罗男子医院
- 北京恒安中医院
  - 网址 39yi.com.cn;67301930.com
- 北京建国医院
  - 网址 brand.lcxw.cn;nk.bjjgyy.com
- 北京国际医疗中心
  - 网址 imcclinics.com;
- 北京天伦不孕不育医院
  - 网址 tlbaby.com;bj.tlbaby.com
- 北京玛丽妇婴医院
  - 网址 mary.net.cn;maryhospital.net
- 北京美联臣医疗美容医院
  - 网址 meilianchen.com;mlcbj.com
- 北京慧中医院
- 北京阳光丽人妇科医院
- 北京恒安中医院
  - 网址 mgy999.com
- 北京京城皮肤病医院
  - 网址 pf110.com;bjjkw.net
- 北京京北医院
- 北京瑞京糖尿病医院
- 北京众安康中医骨科
- 北京麦瑞骨科医院
  - 网址 marygk.com;chmarygk.com
- 北京健宫医院
  - 网址 bjsjgyy.com
- 北京华医中西医结合皮肤病医院
  - 网址 bjhymr.com;bjhyyy.cn
- 北京德胜门中医院
  - 网址 dsmzyy.com
- 北京军都医院
  - 网址 ouya120.com

## 苏州

- 苏州东吴医院
  - 网址 szdwyy.com
- 苏州华美美莱整形医院
  - 网址 szmylike.com
- 昆山虹桥医院
  - 网址 ksyy120.com
- 常熟东方妇科医院
  - 网址 csfk.net
- 常熟仁爱医院
  - 网址 csrayy.cn
- 昆山阳光医院
- 苏州圣爱医院
  - 网址 szsayy.com;sazxw.com
- 苏州新医科

## 天津

- 天津坤如玛丽医院
  - 网址 tjkrml.com
- 天津华北医院
  - 网址 huabeihp.com
- 天津华厦医院
  - 网址 huaxiahp.com
- 天津丽人女子医院
  - 网址 tjlrck.com
- 天津华山医院
  - 网址 58815666.com;tjhsfk.com
- 天津怡泰生殖专科医院
- 天津现代女子医院
  - 网址 022nz.com
- 天津怡泰医院
  - 网址 tjszjk.alibole.com
- 天津乐园医院
  - 网址 28278888.com
- 天津长庚耳鼻喉医院
  - 网址 aewgk.com

## 广州

- 广州华美美莱整形医院
  - 网址 baidu.mylike.cc
- 广州现代医院
  - 网址 22221111.com
- 广州长安医院
  - 网址 new.02022222222.com;yunyu120.com
- 广州益寿医院
  - 网址 22356666.com;gzys120.com;yishou120.com;
- 广州利德医院
- 番禺东方俪人医院
- 番禺玛莉亚肛肠医院
- 广州圣亚泌尿外科医院
  - 网址 28296666.com;gznk.mz16.cn;
- 广州女子医院
  - 网址 81891111.cn;81891111.com;fukegd.com
- 广州市江南医院
  - 网址 gdjnh.com
- 广州济慈医院
  - 网址 32282333.com;gzkf120.com
- 广东民安医院
  - 网址 gzma120.com
- 广州长泰医院
  - 网址 baby.gdbabyw.com;changtai120.com
- 广州健安医院
  - 网址 kqzp.cnff3737index.htm
- 广州458医院
  - 网址 458hospital.com
- 广州花都人爱医院
  - 网址 gzhdrayy.com
- 广州远东美容医院

## 珠海

- 珠海惠爱医院
- 珠海九龙医院
  - 网址 jiulong120.com;0756nanke.com
- 珠海阳光医院
  - 网址 ask.zsjnk.com

## 惠州

- 惠州仁德妇科医院
  - 网址 hzrdyy.com;2212222.com
- 惠阳女子医院
- 惠州东江泌尿专科医院
  - 网址 djmnyy.com

## 中山

- 中山现代妇科医院
  - 网址 zsnvzi.com;0760mama.com
- 中山市国丹中医院
  - 网址 zs120.com
- 中山和平中医院
- 中山阳光医院

## 汕头

- 汕头妇产医院
  - 网址 stfcyy.com

## 东莞

- 东莞现代妇科医院
  - 网址 39dg.com;dgmodern.net;076922011111.com
- 塘厦康桥医院
- 东莞康桥妇科医院
- 东莞乌沙医院
  - 网址 wsyy120.com
- 东莞万福妇产医院
  - 网址 wanfu.ecaihr.com;dgwfyy.com
- 东莞南华妇科医院
  - 网址 nh91.coml;nhfkyy.com
- 东莞东方泌尿专科医院
  - 网址 dfmnyy.com;dgbenchuang.com

## 玉溪

- 玉溪九州医院
  - 网址 jingjia.6106666.net;6106666.com

## 曲靖

- 富源阳光医院
  - 网址 xn--54q40c65nbjuuj9beia.com
- 曲靖九州医院
  - 网址 8965555.com

## 重庆

- 重庆华美美莱整形医院
  - 网址 cqhuamei.com.cn
- 重庆华山中医乳腺病医院
- 重庆坤如玛丽医院
- 重庆现代女子医院
  - 网址 cqmw.com
- 重庆都市丽人医院
  - 网址 cqcbh.com
- 重庆万州博生医院
- 重庆万州美妇产医院
  - 网址 58561111.com
- 涪陵博生和美妇产医院
  - 网址 72780555.com;023pcw.com
- 重庆市爱德华医院
  - 网址 023cqjk.com;023adh.com
- 重庆五洲女子医院
  - 网址 4001031313.com;m.cqwzwh.com
- 重庆安琪儿妇产医院
  - 网址 cqangel.com;
- 第三军医大学重庆新桥医院
  - 网址 xqhospital.com.cn
- 重庆阳光医院
  - 网址 cqygmr.h.onlymr.com;u1631964.b2bname.com
- 万州阳光眼科医院
  - 网址 cqyg120.cn;wzygyk.com;yangguangyanke.com
- 重庆爱德华医院
  - 网址 cqbybyyy.com;023adh.com;yh.023adh.com;120adh.com;wap.adhbyyy.com
- 重庆生殖健康医院
  - 网址 cqsz.cn;89188918.com
- 重庆红楼医院
  - 网址 68716871.com;0236871.com;hlnanke.com
- 解放军第324医院
- 涪陵三峡医院
  - 网址 72243333.com
- 重庆红十字会医院
  - 网址 cqhhyy.com

## 成都

- 成都长征医院
- 成都博爱医院
  - 网址 cdboai.com;xbqiuyi.com
- 成都丽人女子医院
  - 网址 cdlrnz.com
- 成都华美美莱整形医院
  - 网址 08716199999.com;ynmylike.com
- 四川华美紫馨医学美容医院
  - 网址 hmzixin.com
- 成都安琪儿妇产医院
  - 网址 cdangel.com
- 成都蜀都乳腺医院
  - 网址 rx.mysodo.com;thmz.compifucdrxjb;zx.sodozx.com
- 成都糖尿病专科医院
  - 网址 cdtnb.cn;cdtnbyy.com
- 成都曙光男科医院
  - 网址 sgnk.lfnews.cn
- 成都玛利亚妇产医院
  - 网址 cdmaria.com
- 成都欧亚男科医院
  - 网址 cdoynk.com
- 四川阳光妇科医院
  - 网址 ygfk.com;cdygfk.com
- 成都康新妇科医院
- 成都济民女子医院
- 成都糖尿病专科医院

## 雅安

- 解放军第三十七医院
  - 网址 beiww.comadd37jyy

## 遵义

- 遵义女子医院
  - 网址 zynzyy.com;zy120yy.com

## 潍坊

- 潍坊博爱医院
- 潍坊长安医院
  - 网址 cankyy.com
- 潍坊和平医院
  - 网址 hzpdbbhd.cn.b2b168.com

## 青岛

- 青岛妇婴医院
  - 网址 qdfyyy.com
- 青岛玛丽妇产医院
  - 网址 qdmarie.com
- 青岛长征院
  - 网址 qdczyy.cn.b2b168.com
- 青岛曙光男科医院
  - 网址 qdsgnk.cn
- 山东青岛曙光医院
  - 网址 85732222.com.cn
- 青岛集美整形美容医院
  - 网址 jimei.show.imosi.com1index.html;qdzx.b2b.bestb2b.com
- 青岛新阳光医院
  - 网址 newsun120.com

## 德州

- 齐河阳光医院

## 威海

- 威海现代女子医院
  - 网址 5161111.com

## 聊城

- 聊城东昌府三医院
  - 网址 lchosp.com

## 淄博

- 山东淄博金盾医院
  - 网址 3164777.cn
- 淄博女子医院
  - 网址 10000866163.qymgc.com

## 哈尔滨

- 黑龙江玛丽亚妇产医院
  - 网址 pc.82676666.com;hrbfc120.com
- 黑龙江东北医院
- 黑龙江和平医院
  - 网址 hljhpyy.com
- 黑龙江和美妇产医院
  - 网址 hemei120.com;3g.hemei120.com
- 哈尔滨市生殖保健中心院
- 哈尔滨欧亚男科医院
  - 网址 hw7hq1ak.qy01.cn
- 黑龙江长庚耳鼻喉医院
  - 网址 hljcgebh.com;cgwgk120.com
- 黑龙江阳光女子医院
  - 网址 ygnz120.com
- 黑龙江省武警黄金医院妇科
  - 网址 gativ0251.qiugouxinxi.net;haerbin425536.cn.cnlinfo.net

## 长春

- 长春同济医院
  - 网址 pfb.tongjipf.com;changchuntongji.com;ccsjrf.com;hjjmj.com
- 吉林总队医院
- 长春长庚耳鼻喉医院
  - 网址 cccg120.com;cgebh.com
- 长春阳光女子医院
  - 网址 ccyg120.com
- 长春阳光口腔医院

## 四平

- 四平阳光医院
  - 网址 gzlygyy.com

## 延边

- 延吉博生现代妇科医院
  - 网址 2900900.cn

## 沈阳

- 沈阳北陵医院
- 沈阳曙光男科医院
  - 网址 sql531866771.qy01.cn
- 武警辽宁省总队医院
- 解放军沈阳463医院希美整形美容
  - 网址 qzxhgm.com

## 大连

- 大连长城妇科医院
  - 网址 dalian558879.cn.cnlinfo.net;39568888.com
- 大连新世纪医院
- 大连阳光医院
  - 网址 byby.84302222.com;liuhe-china.com

## 无锡

- 无锡玛丽亚医院
  - 网址 wxmly.com
- 无锡嘉仕恒信医院
  - 网址 wxjshx.com;jshxebhw.com
- 无锡南站医院
- 无锡虹桥医院
  - 网址 wxhqyy.com;wxfcyy.com
- 江阴东方女子医院
  - 网址 dfyyfk.com
- 宜兴武警医院
- 江阴九龙泌尿外科医院
  - 网址 jynk.xs163.net
- 无锡新区医院
  - 网址 wndhospital.com

## 南京

- 江苏施尔美整形美容医院
  - 网址 vip.jssem.com
- 南京曙光医院
- 南京江宁博爱医院
  - 网址 025boai.com
- 南京市江宁区众彩门诊部
- 南京世纪现代妇产医院（南院、东院）
  - 网址 86900000.com
- 南京建国男科医院
  - 网址 njjgnkyy.com;bdzh.jg91.com
- 南京康豪妇科
- 南京阳光肿瘤医院
- 南京港龙医院
- 454医院植发科
  - 网址 454hosp.cnindexindex.do
- 南京长江医院植发科
- 南京医科二附院协作医院
- 天长现代妇产医院
  - 网址 tc38120.com
- 南京医科大学附属友谊整形外科医院
  - 网址 311.cn
- 南京解放军81医院
  - 网址 81yy.com
- 南京454医院妇产科
  - 网址 454hosp.cnindexindex.do
- 南京蓝十字脑科医院
  - 网址 lsznk.com
- 南京迈皋桥医院
- 南京东院门诊部
- 南京华美整形美容医院
  - 网址 025lx.com
- 南京空军机关医院神经科
  - 网址 klgcgs.com
- 南京军区机关医院妇科
  - 网址 klgcgs.com
- 南京长江医院
  - 网址 hdbyw.com
- 南京长海医院
  - 网址 njch120.comindex.htm
- 南京美迪亚医院
- 南京亚韩整形美容医院
- 南京仁品耳鼻喉专科医院
- 南京邦德骨科医院
  - 网址 bond120.com
- 南京肛泰中医院
  - 网址 kangangchang.com
- 南京维多利亚美容诊所
  - 网址 njvdly.com

## 张家港

- 张家港朝阳五官科医院
  - 网址 cy5g.com

## 泰州

- 江苏泰州红房子医院
- 泰州市海陵医院
- 泰州海陵女子医院

## 盐城

- 盐城协和康复医院

## 宿迁

- 宿迁市妇产医院
  - 网址 sqfcyy.com
- 泗洪阳光儿童医院

## 淮安

- 江苏淮安中山医院
- 淮安中山医院
  - 网址 hafuke.comabout.html；3g.hafuke.comyygkuang73.html；3g.hananke.comyyjj173.html；3g.hafuke.com
- 淮安生殖医院

## 南通

- 江苏海安华山医院
  - 网址 hahsyy.comhosindex.asp
- 南通和美家妇产科医院
  - 网址 68688888.com
- 南通长城医院
  - 网址 ntccyy.com；ntbyby.com

## 武汉

- 武汉华夏医院
- 武汉华美医院
  - 网址 whhmzx.cn；zswzx.com
- 武汉现代女子妇科医院
  - 网址 whxdnz.com
- 武汉当代佳丽医院
- 湖北荣军医院
  - 网址 hbsrjyy.com
- 武汉阳光女子医院
- 武汉华仁医院

## 荆州

- 荆州华康医院

## 黄冈

- 黄冈泌尿专科医院

## 黄石

- 湖北黄石福康医院
  - 网址 hsfk120.com

## 襄阳

- 襄阳市第五人民医院
  - 网址 xfrlyy.comyiyuandongtai9.html
- 襄阳东大肛肠医院
- 襄阳仁爱女子医院

## 乌海

- 乌海现代医院

## 呼和浩特

- 内蒙古天骄医院
  - 网址 nmgtjyy.com
- 呼和浩特五洲女子医院

## 贵阳

- 贵州退休医师医院
- 贵阳五官中心
- 贵阳长江医院
  - 网址 cj120.com
- 贵阳和谐阳光医院
- 贵阳马王庙医院
- 贵阳现代女子医院
  - 网址 gymwh.comindex.html；3fdg.com
- 贵阳和美妇产医院
  - 网址 f.gyhemei.com

## 铜仁

- 铜仁华夏医院
  - 网址 trnkw.netzoujinhuaxia201603282156.html?135284;trebh.net;trhxyy.comashiji.html;trhxyy.com

## 毕节

- 毕节现代医院
  - 网址 8635555.cn;8635555.com

## 长沙

- 长沙华夏医院
  - 网址 hnyy91.com;
- 长沙湘江医院七大医院
  - 网址 24423.zhaopin.job120.com
- 长沙阳光医院
  - 网址 5813999.com
- 长沙仁爱医院
  - 网址 4812888.comguanyu_renai;800094120.com
- 长沙恒生手外科医院
- 长沙博大泌尿专科医院
  - 网址 puyask.com
- 长沙南方骨外科医院
- 长沙现代女子医院
  - 网址 100nz.com
- 长沙丽人妇产医院
  - 网址 100lr.com;520rom.com
- 长沙阳光医院
  - 网址 5813999.com
- 武警湖南省总队医院
  - 网址 hnwjyy.com;police120.com.cn

## 郴州

- 湖南郴州福康医院
  - 网址 czfk120.com

## 湘潭

- 湘潭阳光眼科中心

## 娄底

- 娄底阳光医院
  - 网址 120ygnk.comindex.html

## 南昌

- 南昌市第五医院
  - 网址 wy120.com;wap.wy120.com
- 南昌仁爱女子医院
  - 网址 www2.jxncrafcyy.cn?baidu_ppc-zx;nz91.com;0791nz.com
- 南昌曙光手足外科医院
  - 网址 hand120.com
- 南昌佳美美容医院
  - 网址 nccharm.com.cn
- 南昌华山不孕不育医院
  - 网址 hsbyby.com
- 南昌博爱泌尿专科医院
  - 网址 ncboai.net
- 南昌东大肛肠专科医院
  - 网址 whddgc.cn;zc9886.com;0791gc.com
- 南昌博大耳鼻咽喉专科医院
  - 网址 ncebh.com;ncebh.combodayiyuangaikuangyiyuanhuanjing;3g.ncebh.com
- 南昌泌尿专科医院

## 九江

- 九江玛丽亚医院
- 九江新世纪医院
  - 网址 jjnkyy.com
- 九江阳光女子医院

## 吉安

- 江西吉安市第二人民医院
  - 网址 jasey.cn;jank120.com;

## 萍乡

- 萍乡市新世纪泌尿专科医院
  - 网址 jxqlx.com;pxxsjmnzkyy.alibole.com;kq36.cngfd465;pingxiang719144.cn.cnlinfo.net
- 萍乡妇科医院
  - 网址 6663120.comindex.html;jxmly.com

## 赣州

- 赣州现代泌尿专科医院
  - 网址 dnjcy.com;gzmnyy.com;0797120.com

## 上饶

- 上饶东大肛肠专科医院
  - 网址 0793gc.netabout_dd#baidu-0793gc-DN-0055;zc9886.com;gxpacking.net;0793gc.net
- 上饶协和医院
  - 网址 yanfeng86.alibole.com;0793fk.com;srrlw.com;0793fkyy.com;0793nkw.com;0793jk.com

## 太原

- 山西现代妇产医院
  - 网址 sxmw.com.cn;rl.sxmw.com.cn;sxxd.h.onlymr.com;sxmw.cn;sxmw.com.cnatesechanke;sxws.cnhoshomeSecondaryGK.aspx?UnitID=65800;m.yyk.99.com.cntaiyuan73205
- 山西民生医院
  - 网址 sxms.com.cn;tywc120.com;2199999.net;
- 太原糖尿病专科医院
  - 网址 tytnb.com;lyj7885521.alibole.com;15627.zhaopin.job120.com;tytnbzkyy.show.imosi.com1index.html
- 太原新医医院
  - 网址 121632.shop.liebiao.com;tyxyyy.show.imosi.com1index.html
- 太原益民中医院
  - 网址 5616999.comindex.html;xinnd.com;a264913372.alibole.com
- 武警山西总队医院
  - 网址 ln-fkly.comjzxjjzhiliao42374959.html;sxwjmn.com;yani.yellowurl.cn;1029478.shop.m.liebiao.com;1029478.shop.liebiao.com;m.bijing2.b2b168.com
- 山西长庚耳鼻喉医院
  - 网址 kinda.cn.qiyeku.com;0351ent.com
- 太原糖尿病专科医院
  - 网址 tytnb.com;lyj7885521.alibole.com;tytnbzkyy.show.imosi.com1index.html
- 太原新医医院
  - 网址 121632.shop.liebiao.com;shop1913524.yellowurl.cn;tyxyyy.show.imosi.com1index.html;2922755.01p.com;hzhua177.33690.cn
- 太原益民中医院
- 太白癜风医院
  - 网址 sxbdf.zhong5.cn

## 临汾

- 临汾现代女子医院
  - 网址 lf2313333.com;kcfair.org.cn

## 阳泉

- 山西阳泉东方生殖医院
  - 网址 mygshiwaxingzhe13560.maoyigu.com;m.tawoy3087.b2b168.com

## 长治

- 长治女子医院
  - 网址 cz.aikaixin.net;0355fk.com;cznzyy.b2b168.com;0355fk.comayiyuangaishuyiyuanjianjie

## 大同

- 大同新时代妇科医院
  - 网址 dtfk120.com;2433999.com;sdjdpj.cn

## 晋城

- 晋城现代女子医院
  - 网址 2023333.comindex.html
- 晋城生殖医院
  - 网址 jcgcyy.comyydt310.html?k=d_bd_ss_pc_ppyy01_pp_k9472;jcbdsz.com;jcszyy.com

## 晋中

- 山西新阳光妇科医院

## 运城

- 运城禹都人民医院
  - 网址 2094999.comindex.html;yyk.99.com.cnyuncheng103415
- 运城禹都人民医院

## 西安

- 西安俪人医院
  - 网址 xarlyy.comindex.html;vanjia.net
- 武警陕西总队医院
  - 网址 zszp.org;gzfzsp.com;wjyy029.com
- 西安阳光医院

## 包头

- 包头现代女子妇产医院
  - 网址 btfc120.com

## 蚌埠

- 澳美佳女子医院
- 蚌埠解放军一二三中心医院
  - 网址 123yiyuan.net;bbnkyy.cnindex.html

## 亳州

- 涡阳阳光医院
  - 网址 gyygyy.com.cn;bz120yy.comayiyuanjianjie

## 芜湖

- 芜湖阳光眼科医院
- 芜湖丹凤朝阳妇科医院

## 巢湖

- 巢湖康平妇产医院
  - 网址 chfcyy.com;
- 巢湖阳光妇幼医院

## 淮北

- 淮北女子医院
- 淮北阳光心理院

## 合肥

- 合肥市中山医院
  - 网址 hfzs.comhfzsyy1;nankeyiyuan120.com;hfzsfk.com
- 合肥九龙男科医院
  - 网址 2648028.com;nkyy.cnxz.com.cn;hefeixingbing.com
- 合肥丹凤朝阳妇科医院
  - 网址 dfcy120.com;dfmami.com;dfcy0553.com;0553dfcy.com;0551dfcy.com
- 合肥105医院
  - 网址 105yy.cn;105yy.com.cn;105zx.com;105mr.com;105zxmr.com

## 安阳

- 安阳协和医院
  - 网址 ayxhyy.com

## 郑州

- 河南中都皮肤病医院
  - 网址 pf110.net
- 河南省军区医院
  - 网址 jqzy120.qy01.cn
- 郑州集美整形美容医院
  - 网址 jmzx.com
- 郑州华夏白癜风医院
  - 网址 hx.01ny.cn;hnsbdf.com
- 巩义阳光医院
  - 网址 1086326.1024sj.com
- 郑州华山医院
  - 网址 huashanhp.com;hsywhy.com;byby16.com

## 许昌

- 许昌新时代妇科医院
- 许昌凤凰医院
- 许昌中山医院
  - 网址 xczsfk.com;xczshp.com;2158888.com

## 廊坊

- 廊坊万福医院
  - 网址 5269999.com;
- 廊坊世纪协和医院
  - 网址 sjxh2041666.com;0316nkyy.com

## 保定

- 保定京津医院
- 保定世纪协和医院
  - 网址 bdxiehe.com;bdxhmr.h.onlymr.com
- 保定长安医院
- 保定现代女子医院
  - 网址 xdnz120.com
- 保定白癜风医院
  - 网址 bdbdf.com;bdbdf.01ny.cn;bdf0312.com

## 唐山

- 唐山京城皮肤病医院
  - 网址 tspf120.com;tspf110.cn
- 唐山女子医院
  - 网址 fk.7720999.cn;5903333.com;tsfck.com
- 唐山红十字医院

## 洛阳

- 解放军534医院
  - 网址 534fk.com
- 洛阳牡丹女子医院
  - 网址 68611120.com

## 平顶山

- 平顶山市武警医院

## 漯河

- 漯河东方医院
  - 网址 lhdfyy.com;lhdfnf.com

## 石家庄

- 河北东方中西医结合医院
- 石家庄美联臣医疗美容医院
  - 网址 meilianchen.cn;xtmlc.com;meilianchen.com

## 邯郸

- 邯郸仁爱妇科医院
  - 网址 4000310919.com

## 拉萨

- 西藏博爱医院
- 拉萨北大泌尿生殖医院
  - 网址 lsyg120.com

## 银川

- 宁夏西京妇产医院
  - 网址 nxwomen.net;

## 兰州

- 兰州仁和医院
  - 网址 lzrhfk.com;rhnk120.com;lzrhyy.net;lzyunyu.comindex.html;8111000.comindex.html;szjbmz.com

## 桂林

- 广西阳光医院
- 桂林阳光医院

## 柳州

- 柳州福康医院
  - 网址 lzfkyy120.com;lzfk120.com

## 伊犁

- 伊犁阳光女子医院

## 伊宁

- 伊宁阳光女子医院

## 乌鲁木齐

- 新彊维吾尔自治区人民医院肿瘤中心
  - 网址 xjzlyy.com
- 新疆爱德华医院
  - 网址 gjjsk.com;wsnkyy.com;adhyy.com

## 海口

- 武警海南总队医院妇科中心
  - 网址 hnbffck.com

## 温州

- 瑞安华东医院
- 温州长征医院
- 温州协和医院
  - 网址 wzxhyy.h.onlymr.com
- 温州建国医院
  - 网址 wzjg120.com;wzwbyy.com;wzcwk120.com;0577fuke.com
- 温州红旗医院
- 温州爱尔五官科医院
  - 网址 wzae.com.cn

## 龙岩

- 龙岩女子医院
  - 网址 0597fk.comindex.html;lyfcyy.cn;lyfcyy.comhtmlGynecology.html;lynzyy.com
- 龙岩阳光医院
  - 网址 0597xyg.com;xygnk.comindex.html

## 江门

- 江门玛丽妇科医院
- 江门福康医院
  - 网址 fkmr360.com;

## 肇庆

- 肇庆福康医院
  - 网址 2758558.b2b168.com

## 佛山

- 佛山三水女子医院
  - 网址 ssnz120.com;
- 顺德广济中医院
  - 网址 gdsdyy.com
- 顺德新世纪泌尿医院
  - 网址 29282999.com;sdnk.net
- 顺德庄头医院
  - 网址 sdzt2015.tecenet.com;ztyy120.com
- 顺德阳光康复医院

## 深圳

- 深圳美莱美容医院
  - 网址 mylike.com
- 深圳福华中西医结合医院
  - 网址 fh16.cn;gd16.cn
- 深圳博爱医院
  - 网址 boai.com;szboai.com.cn
- 深圳曙光医院
  - 网址 sg91.cn;sg91.net
- 深圳远东妇儿科医院
  - 网址 woman91.com;
- 深圳仁爱医院
  - 网址 fuke.88308188.com;ra120.cn;jk.01ny.cn;fuke.ra120.cn
- 深圳和美妇儿科医院
  - 网址 hm91.com;ft.hm91.com
- 深圳仁康医院
  - 网址 rk91.cn;szrkyy.ecaihr.com
- 深圳罗岗医院
  - 网址 lgyy.cn;
- 深圳雪象医院
  - 网址 xx91.cn
- 深圳健安医院
  - 网址 jayy.cn;
- 深圳华南妇科医院
  - 网址 lgfuer.com;fuke.py168.com;hnfuer.com
- 深圳国瑞泌尿外科医院
- 深圳韩美医疗美容医院
  - 网址 szhmmr.com;jnhmzxmryy.com
- 深圳健丰医院
- 深圳龙济医院
  - 网址 szljyy.com;szljnk.com;lj120.com;bd.29111999.com;28111000.com;29111999.com
- 深圳同仁妇科医院
  - 网址 baidu.trfkyy.com;trfkyy.com;sztrfk.com
- 深圳凤凰医院
- 深圳阳光医院
  - 网址 sun.91.cn;yanke.91.cn

## 昆明

- 昆明华美美莱整形医院
  - 网址 ynmylike.com
- 云南玛莉亚女子医院
- 云南玛莉亚医院
  - 网址 maliya.cn
- 昆明西昌路医院
- 昆明阳光医院
- 昆明仁爱医院
  - 网址 ynrayy.com;ynrenai.net
- 昆明九州医院
  - 网址 6066888.com;jznanke.cn
- 解放军478医院妇产中心
- 昆明九州泌尿医院

## 凉山

- 凉山妇产医院
  - 网址 lsfck.com
- 凉山男科医院

## 南充

- 南充解放军51医院
  - 网址 fv120.com

## 乐山

- 武警四川总队医院

## 福州

- 福州华美美莱整形医院
  - 网址 fzhmzx.com
- 福州鼓楼医院
  - 网址 gulou120.com
- 福州现代妇产医院
  - 网址 fzfcyy.com
- 福州左海医院
  - 网址 pinpai.kqzkyy.com
- 福州总医院第二附属医院
  - 网址 fzzyy.com
- 福清阳光女子医院
  - 网址 0591fk.com
- 福州东南女子医院
  - 网址 hzzdyy.com
- 福州福兴妇产医院
  - 网址 fxfcyy.com
- 福州誉盛医院

## 舟山

- 舟山现代妇科医院
- 舟山市千岛医院
  - 网址 zs-hospital.com
- 舟山市千岛医院妇产科
- 舟山现代妇科医院
- 舟山市千岛医院
  - 网址 413yy.cn
- 舟山市千岛医院妇产科

## 厦门

- 厦门登特口腔医院
  - 网址 xmdtkq.com
- 厦门友好妇科
  - 网址 xmfk.cn
- 厦门湖里康乐门诊部

## 莆田

- 莆田丽人妇科医院
  - 网址 ptlryy.com
- 莆田盛兴医院
  - 网址 ptsxyy.com.cn
- 莆田中西医肛肠医院
  - 网址 ptgtyy.com;ptgtgcyy.com
- 莆田口腔医院
  - 网址 ptkouqiang.com

## 宁波

- 宁波美莱整形美容医院
  - 网址 mylike.com.cnindex.html
- 宁波博爱医院
- 宁波虹桥医院
  - 网址 hqnk.com
- 宁波欧亚男科医院
  - 网址 nbnkyy.com
- 宁波甬城医院
- 慈溪圣爱医院
  - 网址 cxsayy.net

## 杭州

- 杭州新东方妇产科医院
- 杭州玛莉亚妇女医院
  - 网址 hzmly.com
- 杭州虹桥医院
  - 网址 bybynet.cn
- 杭州建国医院
  - 网址 jianguo.e120.com.cn
- 杭州天目山医院
  - 网址 tmsfk.com
- 杭州萧山九龙男科医院
  - 网址 xsjlnkyy.com
- 杭州广仁医院
  - 网址 999men.com
- 杭州阿波罗男子医院
  - 网址 4g.hzabl.com
- 杭州和睦医院
  - 网址 hm120.cn
- 杭州真爱医院
  - 网址 tag.120ask.comyiyuanzjhzzafkyylist
- 杭州瑞丽医疗美容医院
  - 网址 85181111.com
- 杭州同济医院
  - 网址 jzx3.com

## 湖州

- 湖州阳光女子医院
  - 网址 snvzi.comindex.html

## 泉州

- 泉州华美美莱整形医院
  - 网址 qzhmzx.com
- 泉州南亚华侨医院
  - 网址 2100702.czvv.com
- 泉州新阳光女子医院
  - 网址 beian.cqnet110.gov.cnaeh20160123123848388.html
- 泉州坤如玛丽医院
  - 网址 krmlyy.b2b.hxyjw.com
- 泉州南亚医院
  - 网址 23721.zhaopin.job120.com

## 金华

- 浙江金华博康生殖医院
  - 网址 16344.zhaopin.job120.com

## 嘉兴

- 浙江新安国际医院
  - 网址 sian.cc
- 嘉兴曙光中西医结合医院
  - 网址 12961.zhaopin.job120.com
- 嘉兴博爱医院
  - 网址 3g.82056999.net#xyzz1
- 嘉兴曙光中西医结合医院
  - 网址 12961.zhaopin.job120.com

## 济南

- 济南一零六医院
  - 网址 ganbing106.etlong.com
- 山东东方男科医院
  - 网址 121356.shop.liebiao.com
- 山东紫荆花医院
  - 网址 zjhyy.com
- 山东红十字会医院
  - 网址 ql91.com
- 济南中医不孕不育医院
  - 网址 66779999.com
- 济南中医白癜风医院
  - 网址 jnbdfyy.01ny.cnyyzt
- 济南中医精神病医院
  - 网址 sdjsb.org
- 济南中医肝病医院
  - 网址 zygbyy.com
- 济南中医静脉曲张医院
  - 网址 zyjmqz.com
- 济南中医风湿病医院
  - 网址 jnzyfsbyy.com
- 济南中山肝病医院
  - 网址 sdzygb.com
- 济南中德骨科医院
  - 网址 jnzdgk.net
- 济南中研皮肤病医院
  - 网址 wfabs.com
- 济南九龙泌尿专科医院
  - 网址 onlyjj.com
- 济南乳腺医院
- 济南乳腺病医院
  - 网址 67883376.com
- 济南五洲医院
  - 网址 jnwck.com
- 济南六一天使儿童医院
  - 网址 61ach.cn
- 济南华夏医院
  - 网址 jnhxyy.com.cn
- 济南协和肝病医院
  - 网址 gyhcn.cn
- 济南和谐妇科医院
  - 网址 518pw.com
- 济南哮喘病医院
  - 网址 jnsxcb.com
- 济南圣玛利亚妇产医院
  - 网址 jnsmlyfc.com
- 济南坤如玛丽医院
  - 网址 kunr.show.imosi.com
- 济南复元康复医院
  - 网址 xueguanbing120.com
- 济南妇科医院
  - 网址 0531fk.com
- 济南整形美容医院
  - 网址 aph-jn.com.cn
- 济南泉城医院
  - 网址 qcyy0531.com
- 济南海峡美容整形医院
  - 网址 jnhxmryy.com
- 济南现代皮肤病医院
  - 网址 xdpfbyy.com
- 济南白癜风医院
  - 网址 88753333.com
- 济南真爱妇科医院
  - 网址 zafk120.com
- 济南神康医院
  - 网址 jnskyy.com
- 济南美莱整形医院
  - 网址 cnmlzx.alibole.com
- 济南耳鼻喉医院
  - 网址 jnebh.com
- 济南肛肠医院
  - 网址 jngcyy.com
- 济南股骨头医院
  - 网址 zhgk.net#bd1@PCz007z#gg01817t
- 济南肾病医院
  - 网址 shenbing0531.com
- 济南胃肠病医院
  - 网址 jskywn.comztyyyhhd
- 济南血液病医院
  - 网址 86953333.com
- 济南银屑病医院
  - 网址 sdyy0531.com
- 济南阳光女子医院
  - 网址 nvzi.cc
- 济南集美美容整形医院
  - 网址 86039999.com
- 济南青华不孕不育医院
  - 网址 120qh.com
- 济南骨科医院
  - 网址 jngk.cn
- 解放军第三七一中心医院

## 台州

- 温岭和平医院
