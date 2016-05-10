## [English translation](README_en.md)

# 这是什么？

本项目的意图是收集汇总与国内一些医疗机构有关的信息，供广大寻医问药的患者及家属参考。

本项目由Open Power小组共同维护。Open Power小组是一个由志愿者组成的工作组，我们深知自己的能力有限，因此我们只能分享我们当前所知的信息，确保我们没有捏造信息，并努力提高信息的可信度。至于这些信息应该如何指导行动，我们保持缄默。

本项目所有信息基于以下授权协议发布：<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

---


# 第一批医院名单

本项目的第一批医院名单来源于[凤凰网医院名单](http://news.ifeng.com/mainland/special/ptxyy/)，后根据社区热心人的贡献汇总而成。进入这份名单的医院符合以下三个条件中的至少一个：

- 曾经投放百度竞价广告
- 曾经被媒体报道过医疗欺诈事件
- 与[莆田系](https://zh.wikipedia.org/wiki/莆田系)存在直接关系

Open Power小组会以这三个入选条件作为指导原则，明确更详细的审核标准和流程。由于信息确认工作十分复杂，工作量很大，希望所有热心人积极提供信息或线索。

本项目也需要更多的热心人、尤其是有技术背景的热心人加入贡献核心架构。如果有兴趣加入，请在Issues里面申请。

# 贡献者指南

提交贡献之前，请先阅读[贡献者指南](guide.md)。

# 开发者指南

1. 开发者如果需要使用本 repo 的数据，可以通过 [`resource/API_resource/`](resource/API_resource) 中的 yaml 和 json 文件来获取数据
   * 如果发现数据不同步，可以 fork 之后用 `python update.py` 来更新 yaml 和 json 文件，并提交 pull request
   * 如果发现 `update.py` 运行过程中有 Warning，或者 json 和 yaml 中有错误，可以通过 `python update.py debug` 来 debug 所有的输出结果。
     程序运行的 log 会写在根目录中的 `debug.log` 中。`debug.log` 不会被 commit。
2. 本项目所有代码遵守 [GPL V3.0 协议](https://opensource.org/licenses/GPL-3.0)
3. 所有基于本项目的其他项目，包括使用源码，和使用 api 的项目必须开源。[原因请看此处](https://github.com/open-power-workgroup/Hospital/issues/224)

# 特别申明
1. 本项目不会有任何商业目的。如果出现不当的情况，请大家及时指出，并随时监督。
2. 本项目收录的信息均来自互联网，仅为资源共享、学习参考之目的。作者对信息的可用性、准确性或可靠性不作任何承诺与保证。
3. 如果您对本项目提供的信息有任何异议，请第一时间在Issues里面提出。如情况属实的，我们会第一时间予以删除，并同时向您表示歉意。
4. 本项目收录的“用户反馈”，同样来自于互联网，也可能存在不实的问题。如果您对这些用户反馈有疑问或异议，也请及时直接通过Issues提交。
5. 本项目最初的维护者@langhua9527，由于个人原因已经退出本项目的维护。目前本项目由Open Power团队负责管理，管理员是@fakeforreg和@xokctah

# 关联项目
| 名称                                       | 描述                                | Stars | Forks |
| ---------------------------------------- | --------------------------------- | ----- | ----- |
| [hospital-viz](https://github.com/wandergis/hospital-viz) | 基于凤凰网数据的医院地图                      | 390   | 100   |
| [PTHospital.chrome](https://github.com/hustcc/PTHospital.chrome) | Chrome浏览器插件                       | 372   | 53    |
| [GetHosp](https://github.com/fushenghua/GetHosp)   | 一个有情怀的医院查询插件                      | 51    | 13    |
| [Putian_Warning](https://github.com/FirefoxBar/userscript/tree/master/Putian_Warning) | Putian Warning基于GreaseMonkey的扩展脚本 | 37    | 12    |
| [piggyreader](https://github.com/huntbao/piggyreader)   | 饥猪阅读（Piggy Reader），在用户浏览时加以提示     | 14    | 4     |
| [chromeExt](https://github.com/zhangjh/chromeExt)     | 一个Chrome插件                        | 12    | 3     |
| [BlackHospital](https://github.com/neuyu/BlackHospital)   | Android原生应用，可以定位到用户所在城市           | 10    | 3     |
| [PTXNotification](https://github.com/erichuang1994/PTXNotification) | 一个Chrome插件                        | 2     | 1     |
| [莆田系黑心医院名单插件](https://chrome.google.com/webstore/detail/%E8%8E%86%E7%94%B0%E7%B3%BB%E9%BB%91%E5%BF%83%E5%8C%BB%E9%99%A2%E5%90%8D%E5%8D%95%E6%8F%92%E4%BB%B6/ieogbmijfpmdlkdifblkcgomfmonmfbc?hl=zh-CN) | 一个Chrome插件，位于谷歌应用商店               |       |       |
| [第三方查询莆田医院的接口](https://github.com/TeamDolphin/BlackheartedHospital) | @TeamDolphin 提供的第三方查询莆田医院的接口               | 2     | 884      |

# 版本1.2beta

# 目录
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [上海](#%E4%B8%8A%E6%B5%B7)
- [北京](#%E5%8C%97%E4%BA%AC)
- [苏州](#%E8%8B%8F%E5%B7%9E)
- [天津](#%E5%A4%A9%E6%B4%A5)
- [广州](#%E5%B9%BF%E5%B7%9E)
- [珠海](#%E7%8F%A0%E6%B5%B7)
- [惠州](#%E6%83%A0%E5%B7%9E)
- [中山](#%E4%B8%AD%E5%B1%B1)
- [汕头](#%E6%B1%95%E5%A4%B4)
- [东莞](#%E4%B8%9C%E8%8E%9E)
- [江门](#%E6%B1%9F%E9%97%A8)
- [肇庆](#%E8%82%87%E5%BA%86)
- [佛山](#%E4%BD%9B%E5%B1%B1)
- [深圳](#%E6%B7%B1%E5%9C%B3)
- [昆明](#%E6%98%86%E6%98%8E)
- [玉溪](#%E7%8E%89%E6%BA%AA)
- [普洱](#%E6%99%AE%E6%B4%B1)
- [文山](#%E6%96%87%E5%B1%B1)
- [临沧](#%E4%B8%B4%E6%B2%A7)
- [昭通](#%E6%98%AD%E9%80%9A)
- [丽江](#%E4%B8%BD%E6%B1%9F)
- [保山](#%E4%BF%9D%E5%B1%B1)
- [曲靖](#%E6%9B%B2%E9%9D%96)
- [重庆](#%E9%87%8D%E5%BA%86)
- [成都](#%E6%88%90%E9%83%BD)
- [雅安](#%E9%9B%85%E5%AE%89)
- [绵阳](#%E7%BB%B5%E9%98%B3)
- [遵义](#%E9%81%B5%E4%B9%89)
- [凉山](#%E5%87%89%E5%B1%B1)
- [南充](#%E5%8D%97%E5%85%85)
- [乐山](#%E4%B9%90%E5%B1%B1)
- [福州](#%E7%A6%8F%E5%B7%9E)
- [舟山](#%E8%88%9F%E5%B1%B1)
- [厦门](#%E5%8E%A6%E9%97%A8)
- [莆田](#%E8%8E%86%E7%94%B0)
- [宁波](#%E5%AE%81%E6%B3%A2)
- [杭州](#%E6%9D%AD%E5%B7%9E)
- [湖州](#%E6%B9%96%E5%B7%9E)
- [泉州](#%E6%B3%89%E5%B7%9E)
- [金华](#%E9%87%91%E5%8D%8E)
- [嘉兴](#%E5%98%89%E5%85%B4)
- [台州](#%E5%8F%B0%E5%B7%9E)
- [温州](#%E6%B8%A9%E5%B7%9E)
- [龙岩](#%E9%BE%99%E5%B2%A9)
- [济南](#%E6%B5%8E%E5%8D%97)
- [潍坊](#%E6%BD%8D%E5%9D%8A)
- [青岛](#%E9%9D%92%E5%B2%9B)
- [德州](#%E5%BE%B7%E5%B7%9E)
- [威海](#%E5%A8%81%E6%B5%B7)
- [聊城](#%E8%81%8A%E5%9F%8E)
- [淄博](#%E6%B7%84%E5%8D%9A)
- [哈尔滨](#%E5%93%88%E5%B0%94%E6%BB%A8)
- [长春](#%E9%95%BF%E6%98%A5)
- [四平](#%E5%9B%9B%E5%B9%B3)
- [延边](#%E5%BB%B6%E8%BE%B9)
- [沈阳](#%E6%B2%88%E9%98%B3)
- [大连](#%E5%A4%A7%E8%BF%9E)
- [无锡](#%E6%97%A0%E9%94%A1)
- [南京](#%E5%8D%97%E4%BA%AC)
- [泰州](#%E6%B3%B0%E5%B7%9E)
- [盐城](#%E7%9B%90%E5%9F%8E)
- [宿迁](#%E5%AE%BF%E8%BF%81)
- [淮安](#%E6%B7%AE%E5%AE%89)
- [南通](#%E5%8D%97%E9%80%9A)
- [启东](#%E5%90%AF%E4%B8%9C)
- [徐州](#%E5%BE%90%E5%B7%9E)
- [武汉](#%E6%AD%A6%E6%B1%89)
  - [不孕症](#%E4%B8%8D%E5%AD%95%E7%97%87)
  - [妇科/产科](#%E5%A6%87%E7%A7%91%E4%BA%A7%E7%A7%91)
  - [男科](#%E7%94%B7%E7%A7%91)
  - [综合医院](#%E7%BB%BC%E5%90%88%E5%8C%BB%E9%99%A2)
  - [整形科](#%E6%95%B4%E5%BD%A2%E7%A7%91)
  - [专科](#%E4%B8%93%E7%A7%91)
  - [三甲医院外包科室名单如下](#%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%E5%A4%96%E5%8C%85%E7%A7%91%E5%AE%A4%E5%90%8D%E5%8D%95%E5%A6%82%E4%B8%8B)
- [荆州](#%E8%8D%86%E5%B7%9E)
- [黄冈](#%E9%BB%84%E5%86%88)
- [黄石](#%E9%BB%84%E7%9F%B3)
- [襄阳](#%E8%A5%84%E9%98%B3)
- [乌海](#%E4%B9%8C%E6%B5%B7)
- [呼和浩特](#%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9)
- [贵阳](#%E8%B4%B5%E9%98%B3)
- [铜仁](#%E9%93%9C%E4%BB%81)
- [安顺](#%E5%AE%89%E9%A1%BA)
- [毕节](#%E6%AF%95%E8%8A%82)
- [长沙](#%E9%95%BF%E6%B2%99)
- [郴州](#%E9%83%B4%E5%B7%9E)
- [湘潭](#%E6%B9%98%E6%BD%AD)
- [娄底](#%E5%A8%84%E5%BA%95)
- [南昌](#%E5%8D%97%E6%98%8C)
- [九江](#%E4%B9%9D%E6%B1%9F)
- [吉安](#%E5%90%89%E5%AE%89)
- [萍乡](#%E8%90%8D%E4%B9%A1)
- [赣州](#%E8%B5%A3%E5%B7%9E)
- [上饶](#%E4%B8%8A%E9%A5%B6)
- [太原](#%E5%A4%AA%E5%8E%9F)
- [临汾](#%E4%B8%B4%E6%B1%BE)
- [阳泉](#%E9%98%B3%E6%B3%89)
- [长治](#%E9%95%BF%E6%B2%BB)
- [大同](#%E5%A4%A7%E5%90%8C)
- [晋城](#%E6%99%8B%E5%9F%8E)
- [晋中](#%E6%99%8B%E4%B8%AD)
- [运城](#%E8%BF%90%E5%9F%8E)
- [西安](#%E8%A5%BF%E5%AE%89)
- [包头](#%E5%8C%85%E5%A4%B4)
- [蚌埠](#%E8%9A%8C%E5%9F%A0)
- [亳州](#%E4%BA%B3%E5%B7%9E)
- [芜湖](#%E8%8A%9C%E6%B9%96)
- [巢湖](#%E5%B7%A2%E6%B9%96)
- [淮北](#%E6%B7%AE%E5%8C%97)
- [合肥](#%E5%90%88%E8%82%A5)
- [安阳](#%E5%AE%89%E9%98%B3)
- [郑州](#%E9%83%91%E5%B7%9E)
- [新乡](#%E6%96%B0%E4%B9%A1)
- [许昌](#%E8%AE%B8%E6%98%8C)
- [廊坊](#%E5%BB%8A%E5%9D%8A)
- [保定](#%E4%BF%9D%E5%AE%9A)
- [唐山](#%E5%94%90%E5%B1%B1)
- [洛阳](#%E6%B4%9B%E9%98%B3)
- [信阳](#%E4%BF%A1%E9%98%B3)
- [平顶山](#%E5%B9%B3%E9%A1%B6%E5%B1%B1)
- [漯河](#%E6%BC%AF%E6%B2%B3)
- [石家庄](#%E7%9F%B3%E5%AE%B6%E5%BA%84)
- [邯郸](#%E9%82%AF%E9%83%B8)
- [拉萨](#%E6%8B%89%E8%90%A8)
- [银川](#%E9%93%B6%E5%B7%9D)
- [兰州](#%E5%85%B0%E5%B7%9E)
- [南宁](#%E5%8D%97%E5%AE%81)
- [桂林](#%E6%A1%82%E6%9E%97)
- [柳州](#%E6%9F%B3%E5%B7%9E)
- [伊犁](#%E4%BC%8A%E7%8A%81)
- [伊宁](#%E4%BC%8A%E5%AE%81)
- [乌鲁木齐](#%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90)
- [海口](#%E6%B5%B7%E5%8F%A3)
- [西宁](#%E8%A5%BF%E5%AE%81)
- [衡阳](#%E8%A1%A1%E9%98%B3)
- [武进](#%E6%AD%A6%E8%BF%9B)
- [烟台](#%E7%83%9F%E5%8F%B0)
- [扬州](#%E6%89%AC%E5%B7%9E)
- [青岛](#%E9%9D%92%E5%B2%9B-1)
- [资阳](#%E8%B5%84%E9%98%B3)
- [泸州](#%E6%B3%B8%E5%B7%9E)
- [南宁](#%E5%8D%97%E5%AE%81-1)
  - [陈氏家族](#%E9%99%88%E6%B0%8F%E5%AE%B6%E6%97%8F)
  - [詹氏家族](#%E8%A9%B9%E6%B0%8F%E5%AE%B6%E6%97%8F)
  - [林氏家族](#%E6%9E%97%E6%B0%8F%E5%AE%B6%E6%97%8F)
  - [黄氏家族](#%E9%BB%84%E6%B0%8F%E5%AE%B6%E6%97%8F)
- [网站](#%E7%BD%91%E7%AB%99)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[](hospital list begin //PLEASE DO NOT DELETE THIS LINE)
## 上海

- 上海市闵行区中医院
- 电话 021-51876888
- 网址 http://www.tcmmh.com
- 地址 上海市闵行区合川路3071号
- 上海华美医疗美容医院
- 电话 021-58856655
- 电话 400-8806580
- 网址 http://www.shhuamei.cn
- 地址 上海市市辖区浦东新区源深路155号
- 上海万众医院
- 电话 400-8892218
- 网址 http://www.wz120.cc
- 地址 上海市徐汇区吴中路2号
- 用户反馈 [患者家属](http://health.dahe.cn/yypj/yhb/201207/t20120716_397644.html)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?q=cache%3A%2F%2Fhealth.dahe.cn%2Fyypj%2Fyhb%2F201207%2Ft20120716_397644.html&rlz=1C5CHFA_enUS659US659&oq=cache%3A%2F%2Fhealth.dahe.cn%2Fyypj%2Fyhb%2F201207%2Ft20120716_397644.html&aqs=chrome..69i57j69i58.4789j0j4&sourceid=chrome&ie=UTF-8)
- 用户反馈 [天涯网友](http://bbs.tianya.cn/post-41-943030-1.shtml)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?q=cache%3A%2F%2Fbbs.tianya.cn%2Fpost-41-943030-1.shtml&rlz=1C5CHFA_enUS659US659&oq=cache%3A%2F%2Fbbs.tianya.cn%2Fpost-41-943030-1.shtml&aqs=chrome..69i57j69i58.2551j0j4&sourceid=chrome&ie=UTF-8)
- 上海安真医院
- 电话 021-57711006
- 地址 上海市松江区人民南路39号
- 用户反馈 [天涯广告](http://bbs.tianya.cn/post-41-751455-1.shtml)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?q=cache%3A%2F%2Fbbs.tianya.cn%2Fpost-41-751455-1.shtml&rlz=1C5CHFA_enUS659US659&oq=cache%3A%2F%2Fbbs.tianya.cn%2Fpost-41-751455-1.shtml&aqs=chrome..69i57j69i58.2326j0j4&sourceid=chrome&ie=UTF-8)
- 网址 http://2062.hos.zx7b.com
- 上海福华医院
- 电话 021-51961999
- 地址 上海市浦东新区惠南镇城南路98号
- 网址 http://2059.hos.zx7b.com
- 上海玛丽女子医院
- 电话 021-69726299
- 网址 http://www.mary120.cn/
- 网址 http://www.shmary.cn/
- 地址 上海市青浦区公园路380号
- 上海真爱(整形美容)医院
- 电话 021-62269000
- 网址 http://www.shzhenai.com/
- 用户反馈 [患者1](http://www.kobeei.com/lc/31713.html)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?sourceid=chrome-psyapi2&ion=1&espv=2&ie=UTF-8&q=cache%3A%2F%2Fwww.kobeei.com%2Flc%2F31713.html&oq=cache%3A%2F%2Fwww.kobeei.com%2Flc%2F31713.html&rlz=1C5CHFA_enUS659US659&aqs=chrome..69i57j69i58.4678j0j4)
- 上海沪申五官科医院
- 电话 021-54305338
- 网址 http://www.hs5g.com
- 上海远大心胸医院(号称上海心脏病医院)
- 电话 021-64829999
- 网址 http://www.yodak.net/
- 地址 上海市徐汇区龙漕路218号
- 上海仁爱医院
- 电话 021-64688888
- 网址 http://www.renai.cn/
- 地址 上海市徐汇区漕溪路133号(近万体馆)
- 上海天大医疗美容医院
- 电话 021 -64080808
- 网址 http://www.tida.sh.cn
- 网址 http://www.tida120.com
- 上海五官科医院(注:这个隶属深圳博爱医疗集团，非汾阳路的复旦大学附属眼耳鼻喉科医院/上海市五官科医院) （复旦大学附属眼耳鼻喉科医院/上海市五官科医院是卫计委直属公立三甲医院，此条目仅一字之差，容易混淆。目前百度搜索上海五官科医院也是导向到复旦大学附属眼耳鼻喉科医院/上海市五官科医院）院方申明 www.fdeent.org/content/4408
- 网址 http://www.er021.com
- 相关资料 百度搜索关键词"上海五官科医院 上海沪申五官科医院",可以直接看到搜索结果把两者混淆
- 上海博爱医院（是否属于莆田系存在争议，请继续求证）
  - 电话 021-64333999
  - 电话 021-6431 2600
  - 网址 http://boaihospital.com/
  - 地址 上海市淮海中路1590号
  - 证据 
  - [这个网页](http://www.gotoread.com/s/e/?vo=3803&p=43)是《瞭望东方周刊》2007年第4期(电子杂志)的报道《“莆田系”败走上海博爱医院》，报道记者为李蔚和朱国栋，文章提到，上海博爱医院是上海第一家民营医院，2004年莆田系曾入股上海博爱医院，当时莆田人的股份是中骏20%，美迪亚20%，澳信20%，这三家医疗投资集团的掌门人分别为莆田游医大佬詹玉鹏、詹国团和林宗金。2006年3月，上海市卫生局会同市工商局，药监、物价等部门对全市医疗机构的专项检查中，上海博爱医院成为问题最多的医院。违规项目包括“使用‘毁灭癌症细胞、提高存活率’等明显违规用于；门口则擅自挂有‘瑞士羊胚胎素注射亚洲服务中心’等招牌；擅自实行医保、自费病人收费‘双轨制’，部分收费项目自费病人要高出医保病人达三四倍，且未明码标价。”王家屏告诉《瞭望东方周刊》记者，“不久之后，博爱医院就被取消了医保资格，过了一段时间莆田系多数股份黯然推出博爱医院。”
  - 该医院网站主页右边红色标志“博爱公告”声明自己不是莆田系医院。
  - [2015年健康权纠纷案](http://www.pkulaw.cn/case/pfnl_1970324843195518.html?match=Exact)
  - [工信部信息备案查询参考](https://imgur.com/88cf0QJ)
  - 帖子“[绝对原创：看看上海博爱医院的黑幕！](http://bbs.voc.com.cn/topic-3222095-1-1.html)”，该帖子认为医院鲸吞离休干部医疗费，乱收费，乱宰病人尤其是离休干部。并声明"保证所提供的情况是真实的，供市领导调研，决策，既要保证离休干部的医疗要求又要杜绝医疗资金的浪费与被侵吞，制订有效的管理规章。"
- 上海新虹桥医院(号称上海男科医院)
- 电话 021-62092255
- 网址 http://www.xinhongqiao.cn/
- 地址 上海长宁区虹古路85号(虹桥开发区西侧) 
- 上海虹桥医院（所属[上海闵行虹桥医院有限公司](http://weibo.com/shhqyy02164659999)）
- 电话 021-64659999
- 网址 http://www.shhqyy.com
- 地址 上海市闵行区虹梅路2181号（近吴中路）
- 上海九龙男子医院
- 电话 021-52739067
- 电话 021-52732699
- 网址 http://www.long120.cn
- 网址 http://www.shjlnzyy.com/
- 地址 上海市长宁区中山西路333号（近中山公园）
- 上海城市女子医院
- 电话 021-51092999
- 网址 http://www.28567.hos.999120.net/
- 地址 上海市普陀区曹安路1352号
- 上海西郊骨科医院
- 电话 021-52208866
- 电话 136-5172-4016 
- 网址 http://www.sdaj.net/
- 网址 http://www.gb5u.com/
- 网址 http://www.gkyy120.com/
- 网址 http://www.cqgkzj.com/
- 地址 上海市长宁区剑河路595号4号楼
- 上海真美妇科医院
- 电话 021-55099999
- 网址 http://www.giivi.com/
- 网址 http://www.zdia.net/
- 地址 上海市杨浦区宁国路313弄-4号
- 上海南浦妇科医院
- 电话 021-58891199
- 电话 158-2160-8827
- 网址 http://www.nanpuyy.com/
- 网址 http://www.brandv.org/
- 网址 http://www.fyjx.org/
- 网址 http://www.fdfzxy.org/
- 网址 http://www.acgene.org/
- 网址 http://www.nanpu120.com/
- 网址 http://m.up54.com/
- 网址 http://www.rzjfk.com/
- 网址 http://yyk.qqyy.com/h14964/
- 地址 上海市浦东新区浦东南路2250号（南浦大桥下）
- 相关资料
  - 这是百度和谷歌发现网址最多的医院
  - 最后一个网址http://yyk.qqyy.com/h14964/ 所属全球医院网http://www.qqyy.com/ 工信部备案信息为闽ICP备09014062号, 2014-11-06, 福州网健天下网络科技有限公司, 
  - 谷歌搜索关键词： 医院 site:*.qqyy.com 可以发现很多在这个名单上出现的医院，可以为进一步搜索参考。
  - 天涯帖子 [上海南浦妇科医院的受害者 该怎么维权？](http://bbs.tianya.cn/post-828-784859-1.shtml) 
  - 网址http://www.pmref.com/ 将自己称为上海松江区妇科医院，而电话仍然是021-58891199，并且在这个网页http://www.pmref.com/yyjs/51.html 显示为南浦妇科医院
- 上海健桥医院
- 电话 021-56659999
- 网址 http://www.jqbyby.com
- 上海长江医院
- 电话 021-65022556
- 网址 http://www.cjhospital.com
- 解放军411医院
- 电话 400-0789411
- 网址 http://www.sh411wgk.com
- 上海阳光中医医院
- 上海英港泌尿外科医院
- 网址 http://021pfb.net
- 网址 http://shyg91.com
- 上海阿波罗男子医院
- 网址 http://mens120.com
- 网址 http://haonank.com
- 网址 http://abl120.com
- 上海玫瑰女子医院
- 网址 http://shrose.cn
- 上海康新医院
- 上海圣爱医院
- 网址 http://shsayy.com
- 上海同德医院
- 网址 http://shtdyy.com
- 上海安平医院
- 网址 http://apyy120.com
- 江东泌尿外科医院
- 网址 http://shjdyy.com
- 网址 http://jd.fwgk120.com
- 网址 http://baidu.ndxl01.com
- 上海九州泌尿医院
- 网址 http://sh9z.com
- 上海青城医院
- 网址 http://qpqcyy.com
- 上海博大医院
- 网址 http://boda120.com
- 上海中亚医院
- 网址 http://bhjchouse.com
- 网址 http://zywuguan.com
- 上海时光整形外科医院
- 网址 http://sh-shuguang.com
- 网址 http://shsg.h.onlymr.com
- 网址 http://shsgyy.com
- 网址 http://shsgzxwkyy.114.hyyzx.com
- 网址 http://shsg.xiangmu.com
- 上海市黄浦区中西医结合医院
- 网址 http://hpzxy.org
- 网址 http://hpyy.e120.com.cn
- 上海曙康口腔医院
- 网址 http://shskkq.com
- 网址 http://hpt2000022546.h.yynet.cn
- 网址 http://shshukang.bmt.bqqm.com
- 上海市浦东新区传染病医院
- 网址 http://pdcrby.com
- 上海中医药大学附属曙光医院(这个医院的整形科是莆田系的。时光整形被承包。本体不是莆田系的)
- 浦东肝病专科医院
- 众仁曙光医疗保健中心
- 上海市松江区方塔中医医院
- 网址 http://30746.zhaopin.job120.com
- 网址 http://sjftzyyy.com
- 网址 http://shssjq2015.tecenet.com
- 上海嘉华医院
- 网址 http://shjhfk.com
- 网址 http://25780.zhaopin.job120.com
- 上海中骏医学科学研究所
- 网址 http://1921488.01p.com
- 上海天伦医院(注:隶属上海明爱医疗集团)
- 电话 021-65667633
- 电话 021-65259999
- 电话 +9864006660102
- 电话 021-55158829
- 网址 http://www.shtl120.com/
- 网址 http://www.sh-byby.org/
- 网址 http://www.shtlyy.com/
- 网址 http://www.shtianlun.org/
- 网址 http://www.tianlun100.com/
- 地址 上海市虹口区凉城路545号
- 上海国正医院(注:隶属上海明爱医疗集团)
- 电话 021-58009999
- 电话 18801856118
- 网址 http://23759.zhaopin.job120.com/
- 网址 http://shgzyy.cn.b2b168.com/
- 地址 上海市南汇区惠南镇人民西路99号

## 北京

- 武警北京总队医院
- [新闻报道](http://news.ifeng.com/a/20160501/48651671_0.shtml): 在1月“血友病贴吧事件”中，当时媒体对部分已售出的疾病贴吧进行调查，其中承包甲亢吧的是所谓“武警北京总队医院中医甲状腺科”。
- 武警北京市总队第二医院
- [新闻报道](http://news.ifeng.com/a/20160501/48651671_0.shtml): 在朋友圈热门文章《一个死在百度和部队医院之手的年轻人》中，作者通过检索自称“武警北京总队二院官网”的域名注册信息，发现魏则西曾经就医的武警北京总队二院肿瘤生物中心，其背景是莆田系。
- 网址 http://bjbdfld.qiugouxinxi.net
- 北京华美美莱整形医院
- 网址 http://bjmylike.com
- 北京俪人女子医院
- 北京北海医院
- 网址 http://bh01.com
- 网址 http://bjbhfk.com
- 北京前海股骨头医院
- 网址 http://qianhai.com
- 北京市慧慈医院
- 网址 http://huicihospital.com
- 北京五洲女子医院
- 网址 http://bjwzfh.com
- 网址 http://wuzhouyiyuan.com
- 北京圣保罗男子医院
- 北京建国医院
- 网址 http://brand.lcxw.cn
- 网址 http://nk.bjjgyy.com
- 北京天伦不孕不育医院
- 网址 http://tlbaby.com
- 网址 http://bj.tlbaby.com
- 北京玛丽妇婴医院
- 网址 http://mary.net.cn
- 网址 http://maryhospital.net
- 北京美联臣医疗美容医院
- 网址 http://meilianchen.com
- 网址 http://mlcbj.com
- 北京慧中医院
- 北京阳光丽人妇科医院
- 北京恒安中医院
- 网址 http://39yi.com.cn
- 网址 http://67301930.com
- 网址 http://mgy999.com
- 北京京城皮肤病医院
- 网址 http://pf110.com
- 网址 http://bjjkw.net
- 北京京北医院
- 北京京顺医院
- 电话 010-69423999
- 网址 http://www.bjjsyy.com/
- 北京瑞京糖尿病医院
- 北京众安康中医骨科
- 北京麦瑞骨科医院
- 网址 http://marygk.com
- 网址 http://chmarygk.com
- 北京健宫医院
- 网址 http://bjsjgyy.com
- 北京华医中西医结合皮肤病医院
- 网址 http://bjhymr.com
- 网址 http://bjhyyy.cn
- 北京德胜门中医院
- 网址 http://dsmzyy.com
- 北京军都医院
- 网址 http://ouya120.com
- 北京慈康医院
- 网址 http://bjckfk.com
- 网址 http://bjckyy.alibole.com
- 北京艾丽斯妇科医院
- 网址 http://www.fuke120.cn/
- 用户反馈 亲测：医院收费不透明，治疗过程中各种乱开检查的单子，手术价格为普通医院价格10倍左右，最后医院连检查的结果都不会给你。有类似的受害者：[http://money.163.com/16/0329/09/BJAIJCRK00253B0H.html](http://money.163.com/16/0329/09/BJAIJCRK00253B0H.html) , [http://ask.yaolan.com/question/15112409310913796432.html](http://ask.yaolan.com/question/15112409310913796432.html)


## 苏州

- 苏州东吴医院
- 电话 0512-68120120
- 网址 http://www.szdwyy.com
- 苏州华美美莱整形医院
- 电话 400-8816499
- 网址 http://www.mlmryy.com
- 昆山虹桥医院
- 电话 0512-57399999
- 网址 http://www.ksyy120.com
- 常熟东方妇科医院
- 电话 0512-51531111
- 网址 http://www.csfk.net
- 常熟仁爱医院
- 网址 http://csrayy.cn
- 昆山阳光医院
- 苏州圣爱医院
- 电话 0512-68078047
- 网址 http://www.szsayy.com
- 苏州新医科
- 张家港朝阳五官科医院
- 电话 0512-58983999
- 网址 http://www.cy5g.com

## 天津

- 天津坤如玛丽医院
- 电话 022-28285031
- 网址 http://www.tjkrml.com
- 天津华北医院
- 电话 022-24418755
- 网址 http://www.huabeihp.com
- 天津华厦医院
- 电话 022-28230188
- 网址 http://www.huaxiahp.com
- 天津丽人女子医院
- 电话 022-24156655
- 网址 http://www.lr16.com
- 网址 http://www.tjlrfk.com
- 网址 http://lr16.tj.aimeicity.com
- 天津华山医院
- 电话 022-58815889
- 网址 http://www.tjhsfk.com
- 网址 http://www.bevall.com
- 天津怡泰生殖专科医院
- 电话 022-27113333
- 网址 http://暂缺
- 天津现代女子医院
- 电话 022-24459999
- 网址 http://www.022nz.com
- 天津怡泰医院
- 电话 022-27113333
- 网址 http://tjszjk.alibole.com
- 天津乐园医院
- 电话 022-28278888
- 网址 http://www.28278888.com
- 天津长庚耳鼻喉医院
- 电话 400-6703120
- 网址 http://www.tjcg120.com
- 天津阿波罗医院
- 电话 022-28111999
- 网址 http://www.nkyy022.com/
- 地址 天津市南开区黄河道38号
- 天津美莱医学美容医院
- 电话 022-24239999
- 地址 天津市河东区华昌道80-92号(裕阳大厦底商)
- 天津254医院/解放军254医院 部分科室
- 电话 022-26220266
- 地址 天津市河北区黄纬路60号
- 网址 http://www.yafrlaowuw.com/
- 解放军464医院/天津男科医院 部分科室(部分男科吧)
- 电话 400-022-0995
- 地址 天津市红旗南路600号
- 天津解放军第272医院
- 电话 400-022-3272
- 地址 天津和平区多伦道185号

## 广州

- 广州华美美莱整形医院
- 网址 http://baidu.mylike.cc
- 广州现代医院
- 网址 http://22221111.com
- 广州长安医院
- 网址 http://new.02022222222.com
- 网址 http://yunyu120.com
- 广州益寿医院
- 网址 http://22356666.com
- 网址 http://gzys120.com
- 网址 http://yishou120.com
- 广州利德医院
- 番禺东方俪人医院
- 番禺玛莉亚肛肠医院
- 广州圣亚泌尿外科医院
- 网址 http://28296666.com
- 网址 http://gznk.mz16.cn
- 广州女子医院
- 网址 http://81891111.cn
- 网址 http://81891111.com
- 网址 http://fukegd.com
- 广州市江南医院
- 网址 http://gdjnh.com
- 广州济慈医院
- 网址 http://32282333.com
- 网址 http://gzkf120.com
- 广东民安医院
- 网址 http://gzma120.com
- 广州长泰医院
- 网址 http://baby.gdbabyw.com
- 网址 http://changtai120.com
- 广州健安医院
- 网址 http://kqzp.cnff3737index.htm
- 广州458医院
- 网址 http://458hospital.com
- 广州花都人爱医院
- 网址 http://gzhdrayy.com
- 广州远东美容医院
- 广东福康医院

## 珠海

- 珠海惠爱医院
- 珠海九龙医院
- 网址 http://jiulong120.com
- 网址 http://0756nanke.com
- 珠海阳光医院
- 网址 http://ask.zsjnk.com

## 惠州

- 惠州仁德妇科医院
- 网址 http://hzrdyy.com
- 网址 http://2212222.com
- 惠阳女子医院
- 惠州东江泌尿专科医院
- 网址 http://djmnyy.com

## 中山

- 中山现代妇科医院
- 网址 http://zsnvzi.com
- 网址 http://0760mama.com
- 中山市国丹中医院
- 网址 http://zs120.com
- 中山和平中医院
- 中山阳光医院

## 汕头

- 汕头妇产医院
- 网址 http://stfcyy.com

## 东莞

- 东莞现代妇科医院
- 网址 http://39dg.com
- 网址 http://dgmodern.net
- 网址 http://076922011111.com
- 塘厦康桥医院
- 东莞康桥妇科医院
- 东莞乌沙医院
- 网址 http://wsyy120.com
- 东莞万福妇产医院
- 网址 http://wanfu.ecaihr.com
- 网址 http://dgwfyy.com
- 东莞南华妇科医院
- 网址 http://nh91.coml
- 网址 http://nhfkyy.com
- 东莞东方泌尿专科医院
- 网址 http://dfmnyy.com
- 网址 http://dgbenchuang.com
- 东莞玛丽亚妇产医院
- 电话 0769-22993333
- 网址 http://www.dgmaria.cn/
- 地址 东莞南城莞太大道(广彩城酒店旁)

## 江门

- 江门玛丽妇科医院
- 江门福康医院
- 网址 http://fkmr360.com

## 肇庆

- 肇庆福康医院
- 网址 http://2758558.b2b168.com
- 肇庆现代男科医院
- 电话 0758-2221120
- 网址 http://zqnkyy120.com/
- 地址 肇庆市端州区二塔路中段（市二人民医院前行20米左转）

## 佛山

- 佛山三水女子医院
- 网址 http://ssnz120.com
- 顺德广济中医院
- 网址 http://gdsdyy.com
- 顺德新世纪泌尿医院
- 网址 http://29282999.com
- 网址 http://sdnk.net
- 顺德庄头医院
- 网址 http://sdzt2015.tecenet.com
- 网址 http://ztyy120.com
- 顺德阳光康复医院
- 顺德阳新侠义道光康复医院

## 深圳

- 深圳美莱美容医院
- 网址 http://mylike.com
- 深圳福华中西医结合医院
- 网址 http://fh16.cn
- 网址 http://gd16.cn
- 深圳博爱医院
- 网址 http://boai.com
- 网址 http://szboai.com.cn
- 深圳曙光医院
- 网址 http://sg91.cn
- 网址 http://sg91.net
- 深圳远东妇儿科医院
- 网址 http://woman91.com
- 深圳仁爱医院
- 网址 http://fuke.88308188.com
- 网址 http://ra120.cn
- 网址 http://jk.01ny.cn
- 网址 http://fuke.ra120.cn
- 深圳和美妇儿科医院
- 网址 http://hm91.com
- 网址 http://ft.hm91.com
- 深圳仁康医院
- 网址 http://rk91.cn
- 网址 http://szrkyy.ecaihr.com
- 深圳罗岗医院
- 网址 http://lgyy.cn
- 深圳雪象医院
- 网址 http://xx91.cn
- 深圳健安医院
- 网址 http://jayy.cn
- 深圳华南妇科医院
- 网址 http://lgfuer.com
- 网址 http://fuke.py168.com
- 网址 http://hnfuer.com
- 深圳国瑞泌尿外科医院
- 深圳韩美医疗美容医院
- 网址 http://szhmmr.com
- 网址 http://jnhmzxmryy.com
- 深圳健丰医院
- 深圳龙济医院
- 网址 http://szljyy.com
- 网址 http://szljnk.com
- 网址 http://lj120.com
- 网址 http://bd.29111999.com
- 网址 http://28111000.com
- 网址 http://29111999.com
- 深圳同仁妇科医院
- 网址 http://baidu.trfkyy.com
- 网址 http://trfkyy.com
- 网址 http://sztrfk.com
- 深圳凤凰医院
- 深圳阳光医院
- 网址 http://sun.91.cn
- 网址 http://yanke.91.cn
- 深圳中仁泌尿外科医院
- 负责人：林国金
- 网站：http://yyk.99.com.cn/baoan/105761/jianjie.html
- 电话：4008669999
- 证据：
    1. https://www.google.com/#q=%E6%9E%97%E5%9B%BD%E9%87%91+%E5%8C%BB%E9%99%A2&btnK=Google+%E6%90%9C%E7%B4%A2
        1. http://imgur.com/UzfXaWV
           1. http://imgur.com/PdDIwHo
           2. http://imgur.com/5PiBr6e
           3. http://imgur.com/LcXYUo0

## 昆明

- 昆明华美美莱整形医院
- 网址 http://ynmylike.com
- 云南玛莉亚女子医院
- 云南玛莉亚医院
- 网址 http://maliya.cn
- 网址 http://2361.hos.zx7b.com
- 网址 http://maliya.cn
- 昆明西昌路医院
- 昆明阳光医院
- 昆明仁爱医院
- 网址 http://ynrayy.com
- 网址 http://ynrenai.net
- 昆明九州医院
- 网址 http://6066888.com
- 网址 http://jznanke.cn
- 解放军478医院妇产中心
- 昆明九州泌尿医院
- 云南玛莉亚医院
- 网址 http://maliya.cn
- 网址 http://2361.hos.zx7b.com
- 网址 http://maliya.cn
- 云南现代妇产科医院
- 网址 http://5376666.com
- 昆明天伦妇产医院
- 网址 http://kmtl120.com
- 云南同仁新华医院(新新华医院)
- 昆明阳光医院
- 昆明曙光医院
- 网址 http://gpyu4hlqgl.lswsc.com
- 云南九洲医院
- 网址 http://6066888.com
- 网址 http://nkm.6066888.com
- 云南协和医院
- 网址 http://ynddzyy.com
- 网址 http://ynxh.e120.com.cn
- 云南肛泰肛肠医院
- 网址 http://pc.0871gc.com
- 云南骨科医院
- 网址 http://4g.ynsgkyy.com
- 武警云南省边防总队医院糖尿病专科
- 昆明东大肛肠医院
- 网址 http://gkno2.cn.b2bhs.com
- 网址 http://68055555.com
- 昆明中英安琪儿妇产医院
- 网址 http://kmangel.com
- 网址 http://67379999.com
- 网址 http://kmzyaqefcyy.com
- 昆明丽都仁爱医疗美容医院
- 网址 http://2340.hos.zx7b.com
- 网址 http://8880999.com
- 网址 http://api.lidoo.cn
- 昆明骨科医院
- 网址 http://8199999.com
- 昆明强生泌尿专科医院
- 网址 http://kmqsyy.com
- 昆明华希医院
- 网址 http://64186418.net
- 网址 http://kmhxyyfk.com
- 昆明军都三三九医院
- 网址 http://fs.kmjdfsb.com
- 解放军五三三医院
- 解放军四七八医院妇产中心
- 网址 http://1525386.01p.com
- 昆明泌尿生殖专科医院
- 网址 http://mens0871.com
- 网址 http://kmmnszzkyy.cn
- 网址 http://mens0871.com
- 昆明妇产医院
- 网址 http://kmfcyy.com
- 昆明和万家妇科医院
- 网址 http://nvzi91.com
- 网址 http://4155999.com
- 昆明圣安妇产医院
- 网址 http://63333116.com
- 网址 http://shenganyiyuan.com
- 网址 http://kmsan.com
- 昆明宝岛妇产医院
- 网址 http://kmbaodao.com
- 昆明送子鸟不孕不育医院
- 网址 http://0871byby.com
- 网址 http://8131313.com
- 昆明男健医院
- 网址 http://nj568.com
- 昆明都市俪人医院
- 网址 http://kmcbh.com
- 昆明普瑞眼科医院
- 网址 http://kmprykyy.com
- 昆明当代妇产医院
- 网址 http://ddfcyy.com

## 玉溪

- 玉溪九州医院
- 网址 http://jingjia.6106666.net
- 网址 http://6106666.com
- 玉溪民康医院
- 网址 http://yxmkyy.net

## 普洱

- 普洱云美妇产医院
- 网址 http://ymfcyy.com

## 文山

- 文山曙光医院
- 网址 http://wssgnk.com
- 文山圣玛妇产医院
- 网址 http://wssmfc.com

## 临沧

- 临沧市临翔区华西医院
- 网址 http://lchxyy.com

## 昭通

- 昭通玛丽妇产医院
- 网址 http://0870120.com
- 网址 http://ztmlyy.com
- 网址 http://ztml120.com
- 网址 http://0870ml.com
- 网址 http://08702242222.com

## 丽江

- 丽江九洲医院
- 网址 http://29554.zhaopin.job120.com
- 网址 http://8888777.cn
- 网址 http://0888120.com

## 保山

- 保山现代妇产医院
- 网址 http://ynrlyy.com
- 网址 http://baoshan710068.cn.cnlinfo.net
- 网址 http://xdfcyy.com

## 曲靖

- 富源阳光医院
- 网址 http://xn--54q40c65nbjuuj9beia.com
- 曲靖九州医院
- 网址 http://8965555.com
- 曲靖曙光泌尿专科医院
- 网址 http://3311120.com
- 网址 http://qjsgyy.com
- 网址 http://qjsgnkyy.com

## 重庆

- 重庆华美美莱整形医院
- 网址 http://cqhuamei.com.cn
- 重庆华山中医乳腺病医院
- 重庆坤如玛丽医院
- 重庆现代女子医院
- 网址 http://cqmw.com
- 重庆都市丽人医院
- 网址 http://cqcbh.com
- 重庆万州博生医院
- 重庆万州美妇产医院
- 网址 http://58561111.com
- 涪陵博生和美妇产医院
- 网址 http://72780555.com
- 网址 http://023pcw.com
- 重庆市爱德华医院
- 网址 http://023cqjk.com
- 网址 http://023adh.com
- 重庆五洲女子医院
- 网址 http://4001031313.com
- 网址 http://m.cqwzwh.com
- 重庆安琪儿妇产医院
- 网址 http://cqangel.com
- 重庆阳光医院
- 网址 http://cqygmr.h.onlymr.com
- 网址 http://u1631964.b2bname.com
- 万州阳光眼科医院
- 网址 http://cqyg120.cn
- 网址 http://wzygyk.com
- 网址 http://yangguangyanke.com
- 重庆爱德华医院
- 网址 http://cqbybyyy.com
- 网址 http://023adh.com
- 网址 http://yh.023adh.com
- 网址 http://120adh.com
- 网址 http://wap.adhbyyy.com
- 重庆生殖健康医院
- 网址 http://cqsz.cn
- 网址 http://89188918.com
- 重庆红楼医院
- 网址 http://68716871.com
- 网址 http://0236871.com
- 网址 http://hlnanke.com
- 解放军第324医院
- 涪陵三峡医院
- 网址 http://72243333.com
- 重庆红十字会医院
- 网址 http://cqhhyy.com
- 重庆红楼医院雅安解放军第三十七医院

## 成都

- 成都长征医院
- 成都永康医院
- 成都丽人女子医院
- 网址 http://cdlrnz.com
- 成都博爱医院
- 网址 http://cdboai.com
- 网址 http://xbqiuyi.com
- 成都安琪儿妇产医院
- 网址 http://cdangel.com
- 成都蜀都乳腺医院
- 网址 http://rx.mysodo.com
- 网址 http://thmz.compifucdrxjb
- 网址 http://zx.sodozx.com
- 圣贝国际牙科(成都)旗舰医院
- 成都糖尿病专科医院
- 网址 http://cdtnb.cn
- 网址 http://cdtnbyy.com
- 成都曙光男科医院
- 网址 http://sgnk.lfnews.cn
- 成都瑞恩糖尿病医院
- 网址 http://cdtnb.cn
- 成都玛利亚妇产医院
- 成都欧亚男科医院
- 网址 http://cdoynk.com
- 成都玛利亚(南区)天府国际妇产儿童医院
- 成都新世纪肛肠医院
- 网址 http://xsjgcyy.com
- 四川阳光妇科医院
- 网址 http://ygfk.com
- 网址 http://cdygfk.com
- 成都济民女子医院
- 成都维多利亚女子医院
- 网址 http://vdlya.com
- 网址 http://68666666.com
- 网址 http://vdlya.com
- 网址 http://fkzx114.com
- 网址 http://vdly.e120.com.cn
- 成都仁品耳鼻喉专科医院
- 网址 http://cdrpebhzkyy.cn.biz72.com
- 成都天康医院
- 成都养和堂综合门诊部
- 网址 http://ltnk09.atobo.com.cn
- 成都中仁泌尿外科医院
- 成都东大肛肠医院
- 网址 http://gcw028.com
- 成都博大男科医院
- 网址 http://17124.zhaopin.job120.com
- 成都博润白癜风医院
- 网址 http://mc.yiyuan028.com
- 网址 http://yuxuanincense.com
- 网址 http://xjbdf.net
- 成都西南骨科医院
- 成都康新妇科医院
- 成都肛泰肛肠医院
- 成都龙都医院
- 成都天大不孕不育医院
- 网址 http://23729.zhaopin.job120.com
- 网址 http://tdbyby.com
- 成都华美美莱整形医院
- 网址 http://08716199999.com
- 网址 http://ynmylike.com
- 网址 http://hmzixin.com
- 网址 http://mylike.com
- 成都送子鸟不孕不育医院
- 网址 http://cdlrnz.com
- 网址 http://scszn.com
- 网址 http://cqwb.com.cn
- 成都九龙医院
- 网址 http://80899999.com
- 网址 http://fuke120.80899999.com
- 成都喜得儿不孕不育医院
- 网址 http://69288888.com
- 四川华美紫馨医学美容医院
- 网址 http://hmzixin.com
- 四川省生殖健康研究中心附属生殖专科医院
- 网址 http://sz120.com
- 网址 http://xnbyby.com
- 网址 http://sz120.org
- 网址 http://02866319999.com
- 网址 http://home376696.tochgo.com
- 四川肛肠医院
- 网址 http://28140.hos.999120.net
- 圣贝国际牙科(成都)旗舰医院
- 成都玛丽亚(南区)天府国际妇产儿童医院
- 成都市西区医院产科
- 网址 http://cdoynk.shop.liebiao.com
- 网址 http://ck.xqyy.cn
- 网址 http://xqyy.cn
- 绵阳玛丽亚妇产儿童医院
- 网址 http://cdmaria.com
- 武警四川总队医院(部分科室)
- 成都阳光妇科医院
- 网址 http://ygfk.com
- 四川生殖健康中心专科医院
- 武警四川省消防总队医院(妇科/泌尿科)
- 四川中医药高等专科学校附属医院
- 网址 http://myflyy.com

## 雅安

- 解放军第三十七医院
- 网址 http://beiww.comadd37jyy

## 绵阳

- 四川绵阳美康医院
- 网址 http://08162368888.e118114.com

## 遵义

- 遵义女子医院
- 网址 http://zynzyy.com
- 网址 http://zy120yy.com

## 凉山

- 凉山妇产医院
- 网址 http://lsfck.com
- 凉山男科医院
- 凉山华西医院
- 网址 http://liangshan523520.cn.cnlinfo.net
- 凉山生殖健康医院
- 网址 http://3298888.com
- 凉山骨科医院

## 南充

- 南充解放军51医院
- 网址 http://fv120.com
- 南充东大肛肠医院
- 网址 http://nanchong551710.cn.cnlinfo.net

## 乐山

- 武警四川总队医院

## 福州

- 福州华美美莱整形医院
- 网址 http://fzhmzx.com
- 福州鼓楼医院
- 网址 http://gulou120.com
- 福州现代妇产医院
- 网址 http://fzfcyy.com
- 福州左海医院
- 网址 http://pinpai.kqzkyy.com
- 福州总医院第二附属医院
- 网址 http://fzzyy.com
- 福清阳光女子医院
- 网址 http://0591fk.com
- 福州东南女子医院
- 网址 http://hzzdyy.com
- 福州福兴妇产医院
- 网址 http://fxfcyy.com
- 福州誉盛医院

## 舟山

- 舟山现代妇科医院
- 网址 http://www.zsxdfk.com
- 舟山市千岛医院
- 网址 http://zs-hospital.com
- 舟山市千岛医院妇产科

## 厦门

- 厦门登特口腔医院
- 网址 http://xmdtkq.com
- 厦门友好妇科
- 网址 http://xmfk.cn
- 厦门湖里康乐门诊部

## 莆田

- 莆田丽人妇科医院
- 网址 http://ptlryy.com
- 莆田盛兴医院
- 网址 http://ptsxyy.com.cn
- 莆田中西医肛肠医院
- 网址 http://ptgtyy.com
- 网址 http://ptgtgcyy.com
- 莆田口腔医院
- 网址 http://ptkouqiang.com

## 宁波

- 宁波美莱整形美容医院
- 网址 http://www.nbmylike.com
- 宁波博爱医院
- 宁波虹桥医院
- 网址 http://www.nbhqyy.com
- 宁波欧亚男科医院
- 网址 http://www.nbnkyy.com
- 宁波甬城医院
- 慈溪圣爱医院
- 网址 http://www.cxsayy.net

## 杭州

- 杭州新东方妇产科医院
- 杭州玛莉亚妇女医院
- 网址 http://www.hzmly.com
- 杭州虹桥医院
- 网址 http://www.hzhqyy.com
- 杭州建国医院
- 网址 http://jianguo.e120.com.cn
- 杭州天目山妇产医院
- 网址 http://www.97120.cn
- 杭州萧山九龙男科医院
- 网址 http://www.hzjl120.com
- 网址 http://www.nkxsjl.com
- 杭州广仁医院
- 网址 http://www.hzgryy.com
- 网址 http://www.zjbybyw.com
- 杭州阿波罗男子医院
- 网址 http://www.hzabl.com
- 网址 http://www.hzabl.cn
- 杭州和睦医院
- 网址 http://www.hm120.cn
- 杭州真爱医院
- 网址 http://tag.120ask.comyiyuanzjhzzafkyylist
- 杭州同济医院
- 网址 http://www.0571tongji.com
- 网址 http://www.hztjh.com

## 湖州

- 湖州阳光女子医院
- 网址 http://www.snvzi.com
- 网址 http://www.hznvzi.com

## 泉州

- 泉州华美美莱整形美容医院
- 负责人 龚英格
- 电话 0595-28266666
- 网址 http://www.qzmylike.com
- 网址 http://www.qzhmzx.com
- 泉州南亚华侨医院
- 网址 http://2100702.czvv.com
- 泉州新阳光女子医院
- 负责人 郑海滨
- 电话 0595-28966788
- 网址 http://www.0595fk.com
- 网址 http://www.xyg120.net
- 网址 http://www.xygfkyy.com
- 网址 http://www.xygfkyy.net
- 网址 http://www.qzsznyy.net
- 网址 http://www.qzsznyy.com
- 泉州坤如玛丽医院
- 负责人 徐金源
- 网址 http://www.0595ml.com
- 泉州南亚医院
- 网址 http://1085767.1024sj.com
- 网址 http://23721.zhaopin.job120.com
- 泉州南亚医院黑龙江和平医院

## 金华

- 浙江金华博康生殖医院
- 网址 http://16344.zhaopin.job120.com

## 嘉兴

- 浙江新安国际医院
- 网址 http://www.sian.cc
- 嘉兴曙光中西医结合医院
- 网址 http://www.jxjk.cn
- 嘉兴博爱医院
- 网址 http://www.82056999.com

## 台州

- 温岭和平医院

## 温州

- 瑞安华东医院
- 温州长征医院
- 网址 http://www.120cz.com
- 温州协和医院
- 网址 http://wzxhyy.h.onlymr.com
- 温州建国医院
- 网址 http://www.wzjg120.com
- 网址 http://www.wzcwk120.com
- 温州红旗医院
- 温州爱尔五官科医院
- 网址 http://wzae.com.cn

## 龙岩

- 龙岩女子医院
- 用户反馈 [诚信网](http://xiaofeipinglun.com/yiyuanjiankang/5664.html)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?q=cache%3A%2F%2Fxiaofeipinglun.com%2Fyiyuanjiankang%2F5664.html&rlz=1C5CHFA_enUS659US659&oq=cache%3A%2F%2Fxiaofeipinglun.com%2Fyiyuanjiankang%2F5664.html&aqs=chrome..69i57j69i58.3136j0j4&sourceid=chrome&ie=UTF-8)
- 网址 http://0597fk.comindex.html
- 网址 http://lyfcyy.cn
- 网址 http://lyfcyy.comhtmlGynecology.html
- 网址 http://lynzyy.com
- 龙岩阳光医院
- 网址 http://0597xyg.com
- 网址 http://xygnk.comindex.html

## 济南

- 山东东方男科医院
- 用户反馈 [患者意见1](http://www.adiguo.com/nanke.html)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?sourceid=chrome-psyapi2&ion=1&espv=2&ie=UTF-8&q=cache%3A%2F%2Fwww.adiguo.com%2Fnanke.html&oq=cache%3A%2F%2Fwww.adiguo.com%2Fnanke.html&rlz=1C5CHFA_enUS659US659&aqs=chrome..69i57j69i58.4782j0j9)
- 用户反馈 [患者意见2](http://tieba.baidu.com/p/2314938397) 意见仅代表发贴人
- 网址 http://121356.shop.liebiao.com
- 山东紫荆花医院
- 用户反馈 [患者朋友](http://www.fgjy99.com/art2016/2016010391635.html)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?sourceid=chrome-psyapi2&ion=1&espv=2&ie=UTF-8&q=cache%3A%2F%2Fwww.fgjy99.com%2Fart2016%2F2016010391635.html&oq=cache%3A%2F%2Fwww.fgjy99.com%2Fart2016%2F2016010391635.html&rlz=1C5CHFA_enUS659US659&aqs=chrome..69i57j69i58.8547j0j7)
- 网址 http://zjhyy.com
- 网址 http://zjhfk.com
- 山东红十字会医院
- 用户反馈 [患者1](http://www.cywty.com/so/tousu1/2016/0504/4709.html)
- 用户反馈 [Google缓存](http://webcache.googleusercontent.com/search?q=cache%3A%2F%2Fwww.cywty.com%2Fso%2Ftousu1%2F2016%2F0504%2F4709.html&rlz=1C5CHFA_enUS659US659&oq=cache%3A%2F%2Fwww.cywty.com%2Fso%2Ftousu1%2F2016%2F0504%2F4709.html&aqs=chrome..69i57j69i58.2342j0j4&sourceid=chrome&ie=UTF-8)
- 网址 http://ql91.com
- 济南一零六医院
- 网址 http://ganbing106.etlong.com
- 济南中医不孕不育医院
- 网址 http://66779999.com
- 济南中医白癜风医院
- 网址 http://jnbdfyy.01ny.cnyyzt
- 济南中医精神病医院
- 网址 http://sdjsb.org
- 济南中医肝病医院
- 网址 http://zygbyy.com
- 济南中医静脉曲张医院
- 网址 http://zyjmqz.com
- 济南中医风湿病医院
- 网址 http://jnzyfsbyy.com
- 济南中山肝病医院
- 网址 http://sdzygb.com
- 济南中德骨科医院
- 网址 http://jnzdgk.net
- 济南中研皮肤病医院
- 网址 http://wfabs.com
- 济南九龙泌尿专科医院
- 网址 http://onlyjj.com
- 济南乳腺医院
- 济南乳腺病医院
- 网址 http://67883376.com
- 济南五洲医院
- 网址 http://jnwck.com
- 济南六一天使儿童医院
- 网址 http://61ach.cn
- 济南华夏医院
- 网址 http://jnhxyy.com.cn
- 济南协和肝病医院
- 网址 http://gyhcn.cn
- 济南和谐妇科医院
- 网址 http://518pw.com
- 济南哮喘病医院
- 网址 http://jnsxcb.com
- 济南圣玛利亚妇产医院
- 网址 http://jnsmlyfc.com
- 济南坤如玛丽医院
- 网址 http://kunr.show.imosi.com
- 济南复元康复医院
- 网址 http://xueguanbing120.com
- 济南妇科医院
- 网址 http://0531fk.com
- 济南整形美容医院
- 网址 http://aph-jn.com.cn
- 济南泉城医院
- 网址 http://qcyy0531.com
- 济南海峡美容整形医院
- 网址 http://jnhxmryy.com
- 济南现代皮肤病医院
- 网址 http://xdpfbyy.com
- 济南白癜风医院
- 网址 http://88753333.com
- 济南真爱妇科医院
- 网址 http://zafk120.com
- 济南神康医院
- 网址 http://jnskyy.com
- 济南美莱整形医院
- 网址 http://cnmlzx.alibole.com
- 济南耳鼻喉医院
- 网址 http://jnebh.com
- 济南肛肠医院
- 网址 http://jngcyy.com
- 济南股骨头医院
- 网址 http://zhgk.net
- 济南肾病医院
- 网址 http://shenbing0531.com
- 济南胃肠病医院
- 网址 http://jskywn.comztyyyhhd
- 济南血液病医院
- 网址 http://86953333.com
- 济南银屑病医院
- 网址 http://sdyy0531.com
- 济南阳光女子医院
- 网址 http://nvzi.cc
- 济南集美美容整形医院
- 网址 http://86039999.com
- 济南青华不孕不育医院
- 网址 http://120qh.com
- 济南骨科医院
- 网址 http://jngk.cn
- 解放军第三七一中心医院

## 潍坊

- 潍坊博爱医院
- 潍坊长安医院
- 网址 http://cankyy.com
- 潍坊和平医院
- 网址 http://hzpdbbhd.cn.b2b168.com

## 青岛

- 青岛妇婴医院
- 网址 http://qdfyyy.com
- 青岛玛丽妇产医院
- 网址 http://qdmarie.com
- 青岛长征院
- 网址 http://qdczyy.cn.b2b168.com
- 青岛曙光男科医院
- 网址 http://qdsgnk.cn
- 山东青岛曙光医院
- 网址 http://85732222.com.cn
- 青岛集美整形美容医院
- 网址 http://jimei.show.imosi.com1index.html
- 网址 http://qdzx.b2b.bestb2b.com
- 青岛新阳光医院
- 网址 http://newsun120.com
- 青岛安宁医院
- 网址 http://admaimai.com/Shop/robinquan0007
- 网址 http://cihang120.com
- 网址 http://910120.com
- 网址 http://qdanyy.cn.b2b168.com
- 网址 http://jsb.dibaji.com.cn
- 网址 http://360szsme.com
- 网址 http://qdch120.com
- 网址 http://ahsm120.com/lylx
- 网址 http://52jade.net/yyzj
- 网址 http://cheyinxiang.com.cn

## 德州

- 齐河阳光医院

## 威海

- 威海现代女子医院
- 网址 http://5161111.com

## 聊城

- 聊城东昌府三医院
- 网址 http://lchosp.com

## 淄博

- 山东淄博金盾医院
- 网址 http://3164777.cn
- 淄博女子医院
- 网址 http://10000866163.qymgc.com

## 哈尔滨

- 黑龙江玛丽亚妇产医院
- 网址 http://pc.82676666.com
- 网址 http://hrbfc120.com
- 黑龙江东北医院
- 黑龙江和平医院
- 网址 http://hljhpyy.com
- 网址 http://23828.zhaopin.job120.com
- 黑龙江和美妇产医院
- 网址 http://hemei120.com
- 网址 http://3g.hemei120.com
- 哈尔滨市生殖保健中心院
- 哈尔滨欧亚男科医院
- 网址 http://hw7hq1ak.qy01.cn
- 黑龙江长庚耳鼻喉医院
- 网址 http://hljcgebh.com
- 网址 http://cgwgk120.com
- 黑龙江阳光女子医院
- 网址 http://ygnz120.com
- 黑龙江省武警黄金医院妇科
- 网址 http://gativ0251.qiugouxinxi.net
- 网址 http://haerbin425536.cn.cnlinfo.net

## 长春

- 长春同济医院
- 网址 http://pfb.tongjipf.com
- 网址 http://changchuntongji.com
- 网址 http://ccsjrf.com
- 网址 http://hjjmj.com
- 吉林总队医院
- 长春长庚耳鼻喉医院
- 网址 http://cccg120.com
- 网址 http://cgebh.com
- 长春阳光女子医院
- 网址 http://ccyg120.com
- 长春阳光口腔医院
- 吉林创作医院

## 四平

- 四平阳光医院
- 网址 http://gzlygyy.com

## 延边

- 延吉博生现代妇科医院
- 网址 http://2900900.cn

## 沈阳

- 沈阳北陵医院
- 电话 024-82235899
- 网址 http://zhousy0.cn.b2b168.com
- 网址 http://cnlinfo.net/company/11630513.htm
- 沈阳曙光男科医院
- 网址 http://sql531866771.qy01.cn
- 武警辽宁省总队医院
- 电话 024-86526638
- 解放军沈阳463医院希美整形美容
- 网址 http://qzxhgm.com

## 大连

- 大连长城妇科医院
- 电话 400-0078120
- 网址 http://www.39568888.com
- 大连新世纪医院
- 电话 0411-86506565
- 大连阳光医院
- 电话 0411-84302222
- 网址 http://byby.84302222.com
- 网址 http://liuhe-china.com

## 无锡

- 无锡玛丽亚医院
- 网址 http://wxmly.com
- 无锡嘉仕恒信医院
- 网址 http://wxjshx.com
- 网址 http://jshxebhw.com
- 无锡南站医院
- 无锡虹桥医院
- 网址 http://wxhqyy.com
- 网址 http://wxfcyy.com
- 江阴东方女子医院
- 网址 http://dfyyfk.com
- 宜兴武警医院
- 江阴九龙泌尿外科医院
- 网址 http://jynk.xs163.net
- 无锡新区医院
- 网址 http://wndhospital.com
- 江阴红房子医院
- 网址 http://hfz.hynews.net
- 网址 http://hfz120.com
- 网址 http://hfz120.cn
- 网址 http://jyfck.com
- 江阴朝阳男科医院
- 网址 http://jynk120.com
- 网址 http://njnbk.com

## 南京

- 江苏施尔美整形美容医院
- 网址 http://vip.jssem.com
- 南京曙光医院
- 南京江宁博爱医院
- 网址 http://025boai.com
- 南京市江宁区众彩门诊部
- 南京世纪现代妇产医院
- 南京建国男科医院
- 网址 http://njjgnkyy.com
- 网址 http://bdzh.jg91.com
- 南京康豪妇科
- 南京阳光肿瘤医院
- 南京港龙医院
- 454医院植发科
- 网址 http://454hosp.cnindexindex.do
- 南京医科二附院协作医院
- 天长现代妇产医院
- 网址 http://tc38120.com
- 南京医科大学附属友谊整形外科医院
- 网址 http://311.cn
- 南京解放军81医院
- 网址 http://81yy.com
- 南京454医院妇产科
- 网址 http://tag.120ask.com/yiyuan/nj454yyfk
- 南京蓝十字脑科医院
- 网址 http://lsznk.com
- 南京迈皋桥医院
- 南京东院门诊部
- 南京华美整形美容医院
- 网址 http://025lx.com
- 南京空军机关医院神经科
- 网址 http://njjgyy.alibole.com
- 南京军区机关医院妇科
- 网址 http://klgcgs.com
- 南京长江医院
- 网址 http://hdbyw.com
- 南京长海医院
- 网址 http://njch120.comindex.htm
- 南京美迪亚医院
- 南京亚韩整形美容医院
- 南京仁品耳鼻喉专科医院
- 南京邦德骨科医院
- 网址 http://bond120.com
- 南京肛泰中医院
- 网址 http://kangangchang.com
- 南京维多利亚美容诊所
- 网址 http://njvdly.com
- 南京华世佳宝妇产医院
- 网址 http://hswoman.com/chanke
- 南京中天皮肤病医院
- 网址 http://pf025.com
- 网址 http://wh-eq.com
- 网址 http://njpfyy.com
- 网址 http://glhrscsc.com
- 网址 http://0531jz.cn
- 南京恒大中医院
- 网址 http://njhdzy.com
- 南京新协和医院
- 南京天伦医院
- 南京玛丽妇产医院
- 南京华西妇科医院
- 南京新城医院
- 南京建国医院
- 南京雨花男科医院
- 南京科大医院
- 南京和燕医院
- 半山医院妇科
- 南京高淳博爱医院
- 溧水瑞丽妇产医院
- 南京华夏妇科
- 南京仁济妇科
- 南京广济医院
- 南京江宁友爱医院
- 南京连天美美容医院
- 南京韩辰整形
- 南京康美美容医疗医院
- 南京奇致医疗美容医院
- 南京维多利亚整形医院
- 南京华肤医院
- 南京华夏白癜风医院
- 南京现代长城医院
- 南京保肤堂皮肤病研究所
- 南京延龄白癜风医院
- 南京康贝佳口腔医院
- 南京金伯利口腔
- 南京数字口腔医院
- 南京雅度齿科
- 南京曙光肛肠医院
- 南京肛泰医院
- 南京仁品耳鼻喉科医院
- 南京正大耳鼻喉科医院
- 南京鼓楼新生门诊
- 南京华都医学研究院
- 溧水中山医院
- 尔康强制性脊柱炎研究所
- 南京龙蟠结石医院
- 南京远大医学研究所
- 南京万厚肝病医院
- 南京和平

## 泰州

- 江苏泰州红房子医院
- 泰州市海陵医院
- 泰州海陵女子医院
- 泰兴协和医院
- 网址 http://go007.com/zp/comp_3787116.htm
- 靖江丽人女子医院
- 网址 http://x62jz44rrz.b2b.7wsh.com
- 靖江微创医院
- 网址 http://a181359475.alibole.com

## 盐城

- 盐城协和康复医院

## 宿迁

- 宿迁市妇产医院
- 网址 http://sqfcyy.com
- 泗洪阳光儿童医院

## 淮安

- 江苏淮安中山医院
- 淮安生殖医院

## 南通

- 江苏海安华山医院
- 网址 http://hahsyy.comhosindex.asp
- 南通和美家妇产科医院
- 网址 http://68688888.com
- 南通长城医院
- 网址 http://ntccyy.com
- 网址 http://ntbyby.com

## 启东
- 启东市中医院
- 电话 0513-83212540
- 网址 http://www.qdszyy.com/
- 地址 江苏省启东市紫薇中路458号

## 徐州
- 徐州新华医院
- 徐州复兴眼科医院
- 徐州国康中医院
- 徐州九龙妇产医院
- 新沂市博爱医院
- 徐州瑞博医院
- 徐州百汇医院
- 徐州京城皮肤病医院

## 武汉

### 不孕症

- 武汉送子鸟不孕不育医院
- 电话 027-83771313
- 网址 http://www.szn027.com
- 武汉黄浦中西医结合医院
- 电话 400-9961009
- 网址 http://www.ctbyw.com

### 妇科/产科

- 武汉现代妇产医院
- 电话 027-68836686
- 网址 http://whxdnz.com
- 网址 http://027xdnz.com
- 网址 http://027buyunbuyu.com
- 武汉当代佳丽医院
- 电话 027-87563555
- 网址 http://whmdzx.com
- 武汉阳光女子医院
- 广州军区武汉总医院南湖妇产中心
- 网址 http://whzyy.net
- 网址 http://nhfczx.com
- 武汉百佳医院
- 电话 027-66666333
- 网址 http://www.whbjyy.com
- 武汉玛利亚妇产科医院
- 电话 027-88858965
- 网址 http://www.mlyfc.net
- 武汉都市妇产医院
- 电话 027-85268003
- 网址 http://www.whdsfk.com
- 武汉真爱妇产医院
- 电话 027-87189999
- 网址 http://www.87189999.com
- 武汉友好医院
- 网址 http://whujy.com
- 网址 http://yiwuguan.com
- 网址 http://84777666.com
- 网址 http://dlspaint.com
- 网址 http://jiaz360.com
- 网址 http://web.htfk120.com
- 网址 http://sdwumo.com
- 网址 http://wap.shjxuan.com
- 网址 http://shjxuan.com

### 男科

- 武汉阿波罗男科医院
- 电话 027-85888669
- 网址 http://www.whablnk.com
- 武汉曙光中西医结合医院
- 电话 027-88129788
- 网址 http://tag.120ask.com/yiyuan/whsgzxyjhyy
- 武汉博大男科医院
- 电话 027-85896666
- 网址 http://www.whnanke.net
- 武汉现代泌尿外科医院
- 电话 027-82886888
- 网址 http://www.xdmnyy.com
- 武汉名仕泌尿外科医院
- 电话 027-88328080
- 网址 http://www.whmsnk.com

### 综合医院

- 武汉华夏医院
- 电话 027-87275566
- 网址 http://www.whhxyy.com
- 湖北省荣军医院
- 电话 027-62084891
- 网址 http://www.hbsrjyy.com
- 武汉仁爱医院
- 电话 027-83798531
- 网址 http://www.whrenai.com
- 武汉中原医院
- 电话 027-85733999
- 网址 http://www.whzyyy.com
- 武汉博爱医院
- 电话 027-86722223
- 网址 http://www.boaifk.com
- 武汉华仁医院
- 电话 027-87875387
- 武汉东南医院
- 电话 027-83659999
- 武汉同济来福康医院
- 电话 027-83884040
- 武汉虎泉医院
- 电话 027-88089120
- 网址 http://www.hqsmk.com

### 整形科

- 武汉华美整形医院
- 电话 400-0070606
- 网址 http://www.zswzx.com
- 武汉五洲美莱整形美容医院
- 电话 027-86785799
- 网址 http://www.88077777.com
- 武汉韩辰整形医院
- 电话 400-0303027
- 网址 http://www.4000303027.com
- 武汉艺星医疗美容医院
- 电话 400-0601992
- 网址 http://www.whyestar.com

### 专科

- 武汉博仕肛肠肛肠医院
- 电话 027-88855999
- 网址 http://www.39bsw.com
- 武汉仁安眼耳鼻喉医院
- 电话 400-6027669
- 网址 http://www.whrenan.com
- 武汉京都结石病医院
- 电话 027-88616718
- 网址 http://www.hbjieshi.com
- 武汉太医堂中医院
- 网址 http://whpfb.01ny.cn
- 网址 http://whpfk.zznews.cn
- 网址 http://yxgyzs.com/qcd/591.html
- 武汉国医堂
- 电话 027-87639188
- 网址 http://www.gytsm.com
- 武汉明德肛肠医院
- 电话 027-87585666
- 网址 http://www.whmdgc.com

### 三甲医院外包科室名单如下

- 广州军区武汉总医院(生殖中心、肿瘤科、整形)
- 武汉八医院(肛肠科)
- 解放军161(骨科、妇科、男科、整形)
- 空军457(骨科、肝病、妇科、男科、整形)
- 硚口中山医院(骨科)
- 武汉科技大学附属天佑医院(介入中心、植发)
- 梨园医院(介入中心、肿瘤科)
- 湖北省武警总医院(整形)
- 武汉解放军193医院(肝病、整形)

## 荆州

- 荆州华康医院

## 黄冈

- 黄冈泌尿专科医院

## 黄石

- 湖北黄石福康医院
- 网址 http://hsfk120.com

## 襄阳

- 襄阳市第五人民医院
- 网址 http://xfrlyy.comyiyuandongtai9.html
- 襄阳东大肛肠医院
- 襄阳东方妇科女子医院
- 襄阳仁爱女子医院
- 网址 http://o-wei.com
- 网址 http://ygzhu8.com

## 乌海

- 乌海现代医院

## 呼和浩特

- 内蒙古天骄医院
- 网址 http://nmgtjyy.com
- 呼和浩特五洲女子医院

## 贵阳

- 贵州退休医师医院
- 贵阳五官中心
- 贵阳长江医院
- 网址 http://cj120.com
- 贵阳和谐阳光医院
- 贵阳马王庙医院
- 贵阳现代女子医院
- 网址 http://gymwh.comindex.html
- 网址 http://3fdg.com
- 贵阳和美妇产医院
- 网址 http://f.gyhemei.com
- 贵州省第二人民医院耳鼻喉科(贵阳耳鼻喉科医院)
- 电话 400-0851962
- 网址 http://www.o-wei.com
- 网址 http://www.ygzhu8.com
- 贵阳结石病医院
- 电话 0851-88546001
- 电话 0851-88546002
- 网址 http://www.qlxzhuanke.com
- 网址 http://www.gyjsbyy.com

## 铜仁

- 铜仁华夏医院
- 网址 http://trnkw.netzoujinhuaxia201603282156.html?135284
- 网址 http://trebh.net
- 网址 http://trhxyy.comashiji.html
- 网址 http://trhxyy.com

## 安顺

- 安顺阳光妇科医院

## 毕节

- 毕节现代医院
- 网址 http://8635555.cn
- 网址 http://8635555.com

## 长沙

- 长沙华夏医院
- 网址 http://hnyy91.com
- 长沙湘江医院七大医院
- 网址 http://24423.zhaopin.job120.com
- 长沙阳光医院
- 网址 http://5813999.com
- 长沙仁爱医院
- 网址 http://4812888.comguanyu_renai
- 网址 http://800094120.com
- 长沙恒生手外科医院
- 长沙博大泌尿专科医院
- 网址 http://puyask.com
- 长沙南方骨外科医院
- 长沙现代女子医院
- 网址 http://100nz.com
- 长沙丽人妇产医院
- 网址 http://100lr.com
- 网址 http://520rom.com
- 武警湖南省总队医院
- 网址 http://hnwjyy.com
- 网址 http://police120.com.cn
- 长沙玛丽亚妇产医院

##耒阳

- 耒阳云森医院
- 网址 http://www.lyys120.com/

## 郴州

- 湖南郴州福康医院
- 网址 http://czfk120.com

## 湘潭

- 湘潭阳光眼科中心

## 娄底

- 娄底阳光医院
- 网址 http://120ygnk.comindex.html

## 南昌

- 南昌市第五医院
- 地址 江西省南昌市青云谱区井冈山大道239号(家乐福超市对面)
- 电话 400-1606199
- 电话 0791-86658901
- 网址 http://www.wy120.com
- 微信公众号 ncdwrmyy
- 南昌仁爱女子医院
- 地址 江西省南昌市洪城路636号(洪城大市场正门往西300米路南)
- 电话 0791-85207758
- 电话 0791-86573333
- 网址 http://www.nz91.com
- 南昌曙光手足外科医院
- 地址 江西省南昌市解放西路99号
- 电话 0791-88230000
- 网址 http://www.hand120.com
- 微信公众号 shuguanggongyi
- 南昌佳美美容医院
- 地址 江西省南昌市青云谱区洪都南大道273号
- 电话 400-6796066
- 网址 http://www.nccharm.com.cn
- 微信公众号 nccharm
- 南昌华山不孕不育医院
- 地址 江西省南昌市迎宾北大道285号
- 电话 400-6013130
- 电话 0791-86658913
- 电话 18507005120
- 网址 http://www.hsbyby.cn
- 网址 http://www.nch3yy.com
- 南昌博爱泌尿专科医院
- 地址 江西省南昌市东湖区胜利路355号(近八一桥)
- 电话 0791-86658922
- 电话 0791-87958517
- 网址 http://www.btsdhjsj.com
- 网址 http://www.ncboai.cn
- 网址 http://www.ncboai.net
- 网址 http://www.ot8.cn
- 网址 http://www.xngxw.com
- QQ 542099677
- QQ 3237581371
- 南昌东大肛肠专科医院
- 地址 江西省南昌市胜利路298号(八一桥旁)
- 电话 0791-86822072
- 网址 http://www.0791gc.com
- 微信 ddgc0791
- 南昌博大耳鼻咽喉专科医院
- 地址 江西省南昌市青云谱区洪都南大道237号
- 电话 0791-86658908
- 网址 http://www.ncebh.com

## 九江

- 九江玛丽亚医院
- 九江新世纪医院
- 网址 http://jjnkyy.com
- 九江阳光女子医院

## 吉安

- 江西吉安市第二人民医院
- 网址 http://jasey.cn
- 网址 http://jank120.com

## 萍乡

- 萍乡市新世纪泌尿专科医院
- 网址 http://jxqlx.com
- 网址 http://pxxsjmnzkyy.alibole.com
- 网址 http://kq36.cngfd465
- 网址 http://pingxiang719144.cn.cnlinfo.net
- 萍乡妇科医院
- 网址 http://6663120.comindex.html
- 网址 http://jxmly.com

## 赣州

- 赣州现代泌尿专科医院
- 网址 http://dnjcy.com
- 网址 http://gzmnyy.com
- 网址 http://0797120.com

## 上饶

- 上饶东大肛肠专科医院
- 网址 http://0793gc.netabout_dd#baidu-0793gc-DN-0055
- 网址 http://zc9886.com
- 网址 http://gxpacking.net
- 网址 http://0793gc.net
- 上饶协和医院
- 网址 http://yanfeng86.alibole.com
- 网址 http://0793fk.com
- 网址 http://srrlw.com
- 网址 http://0793fkyy.com
- 网址 http://0793nkw.com
- 网址 http://0793jk.com

## 太原

- 山西现代妇产医院
- 网址 http://sxmw.com.cn
- 网址 http://rl.sxmw.com.cn
- 网址 http://sxxd.h.onlymr.com
- 网址 http://sxmw.cn
- 网址 http://sxmw.com.cnatesechanke
- 网址 http://sxws.cnhoshomeSecondaryGK.aspx?UnitID=65800
- 网址 http://m.yyk.99.com.cntaiyuan73205
- 山西民生医院
- 网址 http://sxms.com.cn
- 网址 http://tywc120.com
- 网址 http://2199999.net
- 武警山西总队医院
- 网址 http://ln-fkly.comjzxjjzhiliao42374959.html
- 网址 http://sxwjmn.com
- 网址 http://yani.yellowurl.cn
- 网址 http://1029478.shop.m.liebiao.com
- 网址 http://1029478.shop.liebiao.com
- 网址 http://m.bijing2.b2b168.com
- 山西长庚耳鼻喉医院
- 网址 http://kinda.cn.qiyeku.com
- 网址 http://0351ent.com
- 太原糖尿病专科医院
- 网址 http://tytnb.com
- 网址 http://lyj7885521.alibole.com
- 网址 http://15627.zhaopin.job120.com
- 网址 http://tytnbzkyy.show.imosi.com1index.html
- 太原新医医院
- 网址 http://121632.shop.liebiao.com
- 网址 http://shop1913524.yellowurl.cn
- 网址 http://tyxyyy.show.imosi.com1index.html
- 网址 http://2922755.01p.com
- 网址 http://hzhua177.33690.cn
- 太原益民中医院
- 网址 http://5616999.comindex.html
- 网址 http://xinnd.com
- 网址 http://a264913372.alibole.com
- 太原白癜风医院
- 网址 http://sxbdf.01ny.cn
- 网址 http://bdflb.com

## 临汾

- 临汾现代女子医院
- 网址 http://lf2313333.com
- 网址 http://kcfair.org.cn

## 阳泉

- 山西阳泉东方生殖医院
- 网址 http://mygshiwaxingzhe13560.maoyigu.com
- 网址 http://m.tawoy3087.b2b168.com

## 长治

- 长治女子医院
- 网址 http://cz.aikaixin.net
- 网址 http://0355fk.com
- 网址 http://cznzyy.b2b168.com
- 网址 http://0355fk.comayiyuangaishuyiyuanjianjie

## 大同

- 大同新时代妇科医院
- 网址 http://dtfk120.com
- 网址 http://2433999.com
- 网址 http://sdjdpj.cn

## 晋城

- 晋城现代女子医院
- 网址 http://2023333.comindex.html
- 晋城生殖医院
- 网址 http://jcgcyy.comyydt310.html?k=d_bd_ss_pc_ppyy01_pp_k9472
- 网址 http://jcbdsz.com
- 网址 http://jcszyy.com

## 晋中

- 山西新阳光妇科医院

## 运城

- 运城禹都人民医院
- 网址 http://2094999.comindex.html
- 网址 http://yyk.99.com.cnyuncheng103415

## 西安

- 西安俪人医院
- 网址 http://xarlyy.comindex.html
- 网址 http://vanjia.net
- 武警陕西总队医院
- 网址 http://zszp.org
- 网址 http://gzfzsp.com
- 网址 http://wjyy029.com
- 西安阳光医院
- 西安东大肛肠医院
- 网址 http://120zcw.com
- 网址 http://xaddgc.com
- 网址 http://dongdahospital.com

## 包头

- 包头现代女子妇产医院
- 网址 http://btfc120.com

## 蚌埠

- 澳美佳女子医院
- 蚌埠解放军一二三中心医院
- 网址 http://123yiyuan.net
- 网址 http://bbnkyy.cnindex.html

## 亳州

- 涡阳阳光医院
- 网址 http://gyygyy.com.cn
- 网址 http://bz120yy.comayiyuanjianjie

## 芜湖

- 芜湖阳光眼科医院
- 芜湖丹凤朝阳妇科医院

## 巢湖

- 巢湖康平妇产医院
- 网址 http://chfcyy.com
- 巢湖阳光妇幼医院

## 淮北

- 淮北女子医院(现已改名为 淮北友好妇产医院)
- 淮北阳光心理院
- 淮北九龙男科医院
- 网址 http://hbnk120.com
- 网址 http://hbjlnk.com
- 淮北和平医院

## 合肥

- 合肥市中山医院
- 网址 http://hfzs.comhfzsyy1
- 网址 http://nankeyiyuan120.com
- 网址 http://hfzsfk.com
- 合肥九龙男科医院
- 网址 http://2648028.com
- 网址 http://nkyy.cnxz.com.cn
- 网址 http://hefeixingbing.com
- 合肥丹凤朝阳妇科医院
- 网址 http://dfcy120.com
- 网址 http://dfmami.com
- 网址 http://dfcy0553.com
- 网址 http://0553dfcy.com
- 网址 http://0551dfcy.com
- 合肥解放军105医院整形美容中心
- 网址 http://105zx.com
- 网址 http://105yy.com.cn
- 网址 http://105mr.cn
- 合肥现代妇产医院
- 网址 http://xdfk.net/index.html
- 合肥军大医院
- 网址 http://hsqg315.com
- 网址 http://kq36.com/jobs/762303
- 合肥红十字会医院
- 网址 http://hhyy120.cn
- 合肥阳光消化病医院
- 网址 http://sun120.cn
- 网址 http://wcask.com
- 网址 http://0551sun.com
- 合肥1+1美容医院
- 网址 http://hfyjy.com
- 合肥丽人美容医院
- 网址 http://hflrzx.com
- 合肥丽人妇科医院
- 电话 0551-63653311
- 网址 http://www.lr120.com/
- 网址 http://3612999.com/
- 地址 安徽省合肥市包河区屯溪路349号
- 合肥喜得儿孕育医院
- 网址 http://shugejia.com
- 网址 http://zhaopin.job120.com
- 合肥当代中西药医院
- 网址 http://tag.120ask.com
- 网址 http://cccc120.com
- 网址 http://xb120yy.com
- 合肥博大泌尿专科医院
- 网址 http://72177.com
- 网址 http://hfccw.com
- 网址 http://sdmy888.com
- 网址 http://lfnews.cn
- 网址 http://zhong5.cn
- 网址 http://ahgwjy.com
- 网址 http://cnxz.com.cn
- 合肥凤凰肿瘤医院
- 网址 http://2678000.com
- 网址 http://hc360wj.com
- 网址 http://ahhffhzl.b2b.globalbuy.cc
- 安徽维多利亚整形医院
- 安徽韩美整形外科医院
- 合肥友好医院
- 网址 http://4666688.cn
- 合肥同济医院
- 网址 http://hftol.com
- 网址 http://hfwbyy.com
- 网址 http://hftjyy.st5.com
- 合肥仁爱中医院
- 网址 http://hfrazyyy.com
- 网址 http://hfrayy.com
- 网址 http://hqgb.wxrb.com
- 网址 http://120-999.cn
- 网址 http://ahrayy.com
- 网址 http://e120.com.cn
- 网址 http://renai.cn.cnlinfo.net
- 合肥远大男科研究院
- 网址 http://hfmans120.com
- 网址 http://hfydyy.com
- 网址 http://hfman120.com
- 网址 http://hfby120.com
- 网址 http://hfrl120.net
- 网址 http://ahcc120.com
- 网址 http://wuhunews.cn
- 网址 http://wxrb.com
- 网址 http://ahnk.72177.com
- 网址 http://hfbp120.net
- 网址 http://hfydnkyy.com
- 网址 http://hfcc120.net
- 网址 http://baiduzhidaonanke.cn
- 网址 http://affk120.com
- 网址 http://thmz.com
- 合肥天伦不孕不育医院
- 网址 http://63713333.com
- 网址 http://tlbaby.com
- 合肥时代医院
- 网址 http://bjhaiba.cn
- 网址 http://hkfl5858.com
- 网址 http://ddsjk.net
- 网址 http://93163120.com
- 网址 http://hfsdkfyy.com
- 网址 http://0551yyz.com
- 网址 http://cqyzxf.com
- 网址 http://aqtfny.com
- 网址 http://mu-ye.com
- 网址 http://sdqpgs.com
- 网址 http://rpgdkj.com
- 网址 http://bjgousi.com
- 网址 http://nanjingchangfang.com
- 网址 http://boden.cc
- 网址 http://93163yy.net
- 网址 http://zghcheng.com
- 网址 http://jsb.01ny.cn
- 网址 http://jsjk.nxing.cn
- 网址 http://jsjk.huaihai.tv
- 网址 http://jsb.wxrb.com
- 网址 http://zbluteng.com
- 网址 http://jsb.thmz.com
- 网址 http://hsqzlxx.com
- 网址 http://maoyibbs.com
- 网址 http://hsqzlxx.com
- 合肥北大白癜风医院
- 网址 http://65650000.com
- 网址 http://186182.com
- 网址 http://51etong.com
- 网址 http://bdbdf.net
- 网址 http://0551bdfyy.com
- 网址 http://hfbbyy.com
- 网址 http://tonglbdf.com
- 网址 http://3g.bdbdf.net
- 网址 http://bb0551.com
- 网址 http://hfbdbdf.org
- 网址 http://huangsbdf.com
- 网址 http://chizbdf.com
- 网址 http://11467.com
- 网址 http://fynews.netweb5101331.hk139.badudns.cc
- 网址 http://65750000.com
- 网址 http://hf.bwqnw.gov.cn
- 合肥国仁皮肤病医院
- 网址 http://qdrmyy.com
- 网址 http://3g.grpfyy.com
- 网址 http://pf0551.com
- 合肥新科白癜风医院
- 网址 http://xkbdf.com
- 网址 http://jkbk.3456.cc
- 合肥艺星整形医院
- 网址 http://yestar1992.com
- 网址 http://hfyestar.com
- 网址 http://yestarlb.com
- 网址 http://ccgjwl.com
- 网址 http://yestarclub.com
- 网址 http://jntxzx.com
- 网址 http://yestarzx.com
- 网址 http://jobpin.cn
- 网址 http://sh210.com
- 网址 http://zg-lawyer.com
- 网址 http://zhengxing.zjol.com.cn
- 网址 http://3g.hfyestar.com
- 网址 http://ahyestar.com
- 合肥恒美整形医院
- 网址 http://0551hmzx.com
- 网址 http://0551hmmr.com
- 网址 http://956.hos.zx7b.com
- 网址 http://hfhm.h.onlymr.com
- 网址 http://1093672.shop.liebiao.com
- 合肥华美整形医院
- 网址 http://hfhuamei.com
- 合肥名人眼科医院
- 网址 http://aheye.cn
- 网址 http://mingreneye.com
- 合肥新视界眼科医院
- 电话 400-6651616
- 网址 http://www.hfneweye.com/
- 地址 合肥包河区徽州大道689号(徽州大道与九华山路交口往南300米)
- 合肥普瑞眼科医院
- 网址 http://maidige.com
- 网址 http://p0551.com
- 网址 http://yiyuan.zgjsyw.com

## 安阳

- 安阳协和医院
- 网址 http://ayxhyy.com

## 郑州

- 河南中都皮肤病医院
- 网址 http://pf110.net
- 河南省军区医院
- 网址 http://jqzy120.qy01.cn
- 郑州集美整形美容医院
- 网址 http://jmzx.com
- 郑州华夏白癜风医院
- 网址 http://hx.01ny.cn
- 网址 http://hnsbdf.com
- 巩义阳光医院
- 网址 http://1086326.1024sj.com
- 郑州华山医院
- 网址 http://huashanhp.com
- 网址 http://hsywhy.com
- 网址 http://byby16.com
- 郑州丽天整形医院
- 网址 http://moliyazx.com
- 网址 http://litianzx.com
- 网址 http://ltzx.alibole.com

## 新乡

- 新乡阳光医院
- 新乡和平医院
- 网址 http://l99499.alibole.com
- 网址 http://xinxiang642403.cn.cnlinfo.net
- 解放军371医院

## 许昌

- 许昌新时代妇科医院
- 许昌凤凰医院
- 许昌中山医院
- 网址 http://www.xczshp.com
- 网址 http://www.xcyyhp.com
- 网址 http://www.2158888.com
- 网址 http://www.xczsnk.com
- 网址 http://xczsnk.com
- 地址 许昌市西大街280号
- 电话 0374-2158889

## 廊坊

- 廊坊万福医院
- 网址 http://5269999.com
- 廊坊世纪协和医院
- 网址 http://sjxh2041666.com
- 网址 http://0316nkyy.com

## 保定

- 保定京津医院
- 保定世纪协和医院
- 网址 http://bdxiehe.com
- 网址 http://bdxhmr.h.onlymr.com
- 保定长安医院
- 保定现代女子医院
- 网址 http://xdnz120.com
- 保定白癜风医院
- 网址 http://bdbdf.com
- 网址 http://bdbdf.01ny.cn
- 网址 http://bdf0312.com

## 唐山

- 唐山京城皮肤病医院
- 网址 http://tspf120.com
- 网址 http://tspf110.cn
- 唐山女子医院
- 网址 http://fk.7720999.cn
- 网址 http://5903333.com
- 网址 http://tsfck.com
- 唐山红十字医院

## 洛阳

- 洛阳牡丹女子医院
- 网址 http://68611120.com
- 解放军534医院
- 网址 http://534fk.com

## 信阳

- 信阳泌尿外科医院
- 信阳博士医院
- 网址 http://bbrmyy.com
- 网址 http://3222555.com
- 网址 http://3222555.kuaizhan.com
- 网址 http://nbsbpfk.com
- 地址:信阳市申城大道(原大庆路)沁园春旁
- 电话 0376-3222555
- 网址 http://www.bbrmyy.com

## 平顶山

- 平顶山市武警医院

## 漯河

- 漯河东方医院
- 网址 http://lhdfyy.com
- 网址 http://lhdfnf.com

## 石家庄

- 河北东方中西医结合医院
- 石家庄美联臣医疗美容医院
- 网址 http://meilianchen.cn
- 网址 http://xtmlc.com
- 网址 http://meilianchen.com

## 邯郸

- 邯郸仁爱妇科医院
- 网址 http://4000310919.com

## 拉萨

- 西藏博爱医院
- 拉萨北大泌尿生殖医院
- 网址 http://lsyg120.com

## 银川

- 宁夏西京妇产医院
- 网址 http://nxwomen.net

## 兰州

- 兰州仁和医院
- 网址 http://lzrhfk.com
- 网址 http://rhnk120.com
- 网址 http://lzrhyy.net
- 网址 http://lzyunyu.comindex.html
- 网址 http://8111000.comindex.html
- 网址 http://szjbmz.com
- 兰州天伦不孕症医院
- 网址 http://www.lztlyy.com

## 南宁

- 南宁曙光医院
- 网址 http://nnsgyy.com
- 网址 http://2429999.com
- 网址 http://nnnk.alibole.com
- 南宁玛利亚医院
- 网址 http://nanning468523.cn.cnlinfo.net
- 南宁天伦医院
- 地址 广西南宁市西乡塘区明秀西路152号
- 电话 0771-232111
- 网址 http://www.nntlbyby.com


## 桂林

- 广西阳光医院
- 桂林阳光医院

## 柳州

- 柳州福康医院
- 网址 http://lzfkyy120.com
- 网址 http://lzfk120.com

## 伊犁

- 伊犁阳光女子医院

## 伊宁

- 伊宁阳光女子医院

## 乌鲁木齐

- 新彊维吾尔自治区人民医院肿瘤中心
- 网址 http://xjzlyy.com
- 新疆爱德华医院
- 网址 http://gjjsk.com
- 网址 http://wsnkyy.com
- 网址 http://adhyy.com

## 海口

- 武警海南总队医院妇科中心
- 网址 http://hnbffck.com

## 西宁

- 青海西宁莆田友谊医院
- 网址 http://kq36.cn/caizhijie520
- 西宁现代妇产医院
- 网址 http://6251111.com
- 西宁现代妇产医院
- 网址 http://6251111.com

## 衡阳

- 衡阳蒸湘医院
- 网址 http://hy91.com
- 网址 http://1053409.1024sj.com
- 网址 http://55zxyy.alibole.com
- 网址 http://hyzxh.show.imosi.com/1/index.html
- 网址 http://zhengxiang.gov.cn/main/zwgk/zdlyxxgk/ggfwxx/ylws/425f9cd2-9ad6-4288-ba5b-01be4c837965.shtml

## 武进

- 武进红房子医院
- 网址 http://wjhfz.com
- 网址 http://changzhou525467.cn.cnlinfo.net
- 网址 http://changzhou556235.cn.cnlinfo.net
- 网址 http://lkfskws.cn.b2b168.com
- 网址 http://changzhou537903.cn.cnlinfo.net

## 烟台

- 烟台丽华妇科医院
- 网址 http://33918.zhaopin.job120.com
- 网址 http://ytlh885655.alibole.com
- 网址 http://lihua120.com
- 网址 http://lihua.hoouc.com

## 扬州

- 扬州仁爱医院
- 网址 http://renai500.com
- 网址 http://renai800.com
- 网址 http://yzrayy.com
- 网址 http://0514fk.com
- 网址 http://renai900.com
- 网址 http://0514nk.com
- 网址 http://renai120.com

## 青岛

- 青岛开发区友爱医院
- 网址 http://qdya120.com
- 胶南丽华医院
- 网址 http://shop22427.liecheng.com

## 资阳

- 资阳泌尿专科医院
- 网址 http://sczynk.com/pc/index.html
- 网址 http://sina.ltaaa.com/agent/20160331015255605.html

## 泸州

- 泸州东大肛肠医院

## 南宁

### 陈氏家族

- 广西南宁华美整形美容医院 竹溪大道
- 华夏口腔诊所 竹塘路
- 南宁长江医院 秀厢大道

### 詹氏家族

- 南宁市玛莉亚妇科医院 北大北路
- 爱尔眼科 秀灵路

### 林氏家族

- 南宁曙光医院 中华路
- 广西中医药大学第一附属医院仁爱分院 明秀东路
- 都市丽人整形美容 竹溪立交附近
- 南宁中山医院 安吉大道
- 南宁协和医院 五一路
- 南宁医博中医肛肠医院 安吉大道
- 南宁肛泰中医肛肠医院 安吉路

### 黄氏家族

- 南宁天伦医院 明秀西路
- 广西阳光医院 疑似莆田系医院或在各医院承包科室
- 303医院(部分科室) 植物路
- 广西武警总队医院(部分科室) 鲁班路
- 武警广西总队医院 农院路
- 武警广西边防总队医院 明秀西路
- 广西军区直属门诊部 桃源路
- 南宁市妇幼保健院(部分科室) 友爱南路
- 南宁南国妇科医院 竹溪大道
- 北大妇科医院 大学东路
- 南宁南国妇科医院 青山路
- 南宁市博大医院 银海大道
- 南宁博锐医院(原南宁望州岭医院) 望州路

## 网站

- 医网
- 中华整形网
- 中华不育网
- 广州人流网
- 中华肿瘤网

[](hospital list end //PLEASE DO NOT DELETE THIS LINE)
