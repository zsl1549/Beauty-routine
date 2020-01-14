/**
 * banner数据
 */

function getBannerData() {
  var arr = [
    "../../images/avatar.jpg",
    "../../images/avatar.jpg",
    "../../images/avatar.jpg",
    "../../images/avatar.jpg"
  ];
  return arr;
}
/*
 * 首页 navnav 数据
 */

function getIndexNavData() {
  var arr = [
    {
      id: 1,
      icon: "../../images/nav_icon_01.png",
      title: "推荐"
    },
    {
      id: 2,
      icon: "../../images/nav_icon_02.png",
      title: "美甲"
    },
    {
      id: 3,
      icon: "../../images/nav_icon_03.png",
      title: "美容"
    },
    {
      id: 4,
      icon: "../../images/nav_icon_04.png",
      title: "美发"
    },
    {
      id: 5,
      icon: "../../images/nav_icon_05.png",
      title: "美睫"
    }
  ];
  return arr;
}
/*
 * 首页 对应 标签 数据项
 */

function getIndexNavSectionData() {
  var arr = [
    [
      {
        subject: "特价美甲",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "我们追求的是没有最长只有更长！"
      },
      {
        subject: "睫毛稀疏 种睫毛来帮忙",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "我们追求的是没有最长只有更长！"
      },
      {
        subject: "美丽",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "我们追求的是没有最长只有更长！"
      },
      {
        subject: "理发造型",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "伊本造型是由著名形象设计师杨进先生创办。"
      },
      {
        subject: " 画对了妆，微微一笑颜值倍儿高！",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "《微微一笑很倾城》的剧照简直美腻到不要不要的"
      }
    ],
    [
      {
        artype: "nails",
        subject: "特价美甲",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "我们追求的是没有最长只有更长！"
      }
    ],
    [
      {
        artype: "beauty",
        subject: "美丽",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "我们追求的是没有最长只有更长！"
      },
      {
        artype: "beauty",
        subject: " 画对了妆，微微一笑颜值倍儿高！",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "《微微一笑很倾城》的剧照简直美腻到不要不要的"
      }
    ],
    [
      {
        artype: "hair",
        subject: "理发造型",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "伊本造型是由著名形象设计师杨进先生创办。"
      }
    ],
    [
      {
        artype: "eyelash",
        subject: "睫毛稀疏 种睫毛来帮忙",
        coverpath: "../../images/avatar.jpg",
        price: "$ $ $",
        message: "我们追求的是没有最长只有更长！"
      }
    ]
  ];
  return arr;
}
/**
 * 技师 数据
 * */

function getSkilledData() {
  var arr = [
    {
      company: "美容美发",
      avatar: "../../images/avatar.jpg",
      nickname: "张技师",
      price: "$ $ $",
      message: "从事美发行业60余年，有丰富经验",
      distance: "100m"
    },
    {
      company: "美甲沙龙",
      avatar: "../../images/avatar.jpg",
      nickname: "包技师",
      price: "$ $ $",
      message: "从事美发行业60余年，有丰富经验",
      distance: "200m"
    },
    {
      company: "美睫会所",
      avatar: "../../images/avatar.jpg",
      nickname: "王技师",
      price: "$ $ $",
      message: "从事美发行业60余年，有丰富经验",
      distance: "100m"
    },
    {
      company: "美容养生馆",
      avatar: "../../images/avatar.jpg",
      nickname: "黄技师",
      price: "$ $ $",
      message: "从事美发行业60余年，有丰富经验",
      distance: "400m"
    }
  ];
  return arr;
}

/**
 * 选择器 数据
 */

function getPickerData() {
  var arr = [
    {
      name: "张三",
      phone: "138********",
      province: "北京",
      city: "北京",
      addr: "朝阳区**"
    },
    {
      name: "李四",
      phone: "138********",
      province: "北京市",
      city: "北京市",
      addr: "朝阳区**"
    }
  ];
  return arr;
}
/**
 * 查询 地址
 * */

var user_data = userData();
function searchAddrFromAddrs(addrid) {
  var result;
  for (let i = 0; i < user_data.addrs.length; i++) {
    var addr = user_data.addrs[i];
    console.log(addr);
    if (addr.addrid == addrid) {
      result = addr;
    }
  }
  return result || {};
}
/**
 * 用户数据
 * */

function userData() {
  var arr = {
    uid: "1",
    nickname: "山炮",
    name: "张三",
    phone: "138********",
    avatar: "../../images/avatar.jpg",
    addrs: [
      {
        addrid: "1",
        name: "张三",
        phone: "138********",
        province: "北京",
        city: "直辖市",
        addr: "朝阳区**"
      },
      {
        addrid: "2",
        name: "李四",
        phone: "138********",
        province: "北京",
        city: "直辖市",
        addr: "朝阳区**"
      }
    ]
  };
  return arr;
}
/**
 * 省
 * */

function provinceData() {
  var arr = [
    // {pid:1,pzip:'110000',pname:'北京市'},
    // {pid:2,pzip:'120000',pname:'天津市'}
    "请选择省份",
    "山西省"
  ];
  return arr;
}
/**
 * 市
 * */

function cityData() {
  var arr = [
    // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
    // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
    "请选择城市",
    "太原市",
    "大同市",
    "吕梁市"
  ];
  return arr;
}
/*
 * 对外暴露接口
 */

module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  getPickerData: getPickerData,
  getSkilledData: getSkilledData,
  userData: userData,
  provinceData: provinceData,
  cityData: cityData,
  searchAddrFromAddrs: searchAddrFromAddrs
};
