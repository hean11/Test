module.exports = {
  "title": "桃子熟了",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "家",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "gitlab",
            "link": "https://gitlab.com/hean11",
            "icon": "reco-gitlab"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "水蜜桃",
        "desc": "水蜜桃的营养价值",
        "link": "https://baike.baidu.com/item/%E6%B0%B4%E8%9C%9C%E6%A1%83/2904473?fr=aladdin"
      },
      {
        "title": "水果",
        "desc": "关于水果",
        "email": "1095728868@qq.com",
        "link": "https://baike.baidu.com/item/%E6%B0%B4%E6%9E%9C/6233"
      }
    ],
	"logo": "/logo_trans.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "An He",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": false
  }
}