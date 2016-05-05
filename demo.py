# -*- coding: UTF-8 -*-
import requests
import simplejson

if __name__ == '__main__':
    try:
        # 获取城市列表
        rcity = requests.get('http://opscn.dolphin-browser.com/dop/hospitalregion.json')
        print rcity.json()
        # 根据城市获取莆田医院列表
        rblackhos = requests.get('http://opscn.dolphin-browser.com/dop/hospitalsearch.json', params={'c':'武汉'})
        print rblackhos.json()
    except Exception as e:
        print e
