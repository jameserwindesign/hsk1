// HSK 1 vocabulary data, shared across pages
// All 300 words organized into 17 categories

const categories = [
  {
    "id": "numbers",
    "name": "Numbers & Quantity",
    "words": [
      {
        "pinyin": "líng",
        "hanzi": "零",
        "gloss": "zero"
      },
      {
        "pinyin": "yī",
        "hanzi": "一",
        "gloss": "one"
      },
      {
        "pinyin": "èr",
        "hanzi": "二",
        "gloss": "two"
      },
      {
        "pinyin": "liǎng",
        "hanzi": "两",
        "gloss": "two (of)"
      },
      {
        "pinyin": "sān",
        "hanzi": "三",
        "gloss": "three"
      },
      {
        "pinyin": "sì",
        "hanzi": "四",
        "gloss": "four"
      },
      {
        "pinyin": "wǔ",
        "hanzi": "五",
        "gloss": "five"
      },
      {
        "pinyin": "liù",
        "hanzi": "六",
        "gloss": "six"
      },
      {
        "pinyin": "qī",
        "hanzi": "七",
        "gloss": "seven"
      },
      {
        "pinyin": "bā",
        "hanzi": "八",
        "gloss": "eight"
      },
      {
        "pinyin": "jiǔ",
        "hanzi": "九",
        "gloss": "nine"
      },
      {
        "pinyin": "shí",
        "hanzi": "十",
        "gloss": "ten"
      },
      {
        "pinyin": "bǎi",
        "hanzi": "百",
        "gloss": "hundred"
      },
      {
        "pinyin": "qiān",
        "hanzi": "千",
        "gloss": "thousand"
      },
      {
        "pinyin": "bàn",
        "hanzi": "半",
        "gloss": "half"
      },
      {
        "pinyin": "yíbàn",
        "hanzi": "一半",
        "gloss": "a half"
      },
      {
        "pinyin": "jǐ",
        "hanzi": "几",
        "gloss": "how many / a few"
      },
      {
        "pinyin": "duō",
        "hanzi": "多",
        "gloss": "many / much"
      },
      {
        "pinyin": "duō shǎo",
        "hanzi": "多少",
        "gloss": "how many"
      },
      {
        "pinyin": "shǎo",
        "hanzi": "少",
        "gloss": "few / little"
      },
      {
        "pinyin": "yī xiē",
        "hanzi": "一些",
        "gloss": "some"
      },
      {
        "pinyin": "yī diǎn er",
        "hanzi": "一点儿",
        "gloss": "a little"
      }
    ]
  },
  {
    "id": "time",
    "name": "Time & Calendar",
    "words": [
      {
        "pinyin": "nián",
        "hanzi": "年",
        "gloss": "year"
      },
      {
        "pinyin": "yuè",
        "hanzi": "月",
        "gloss": "month / moon"
      },
      {
        "pinyin": "rì",
        "hanzi": "日",
        "gloss": "day / sun"
      },
      {
        "pinyin": "hào",
        "hanzi": "号",
        "gloss": "date / number"
      },
      {
        "pinyin": "tiān",
        "hanzi": "天",
        "gloss": "day / sky"
      },
      {
        "pinyin": "xīng qī",
        "hanzi": "星期",
        "gloss": "week"
      },
      {
        "pinyin": "xīngqīrì",
        "hanzi": "星期日",
        "gloss": "Sunday"
      },
      {
        "pinyin": "xīngqītiān",
        "hanzi": "星期天",
        "gloss": "Sunday"
      },
      {
        "pinyin": "jīn tiān",
        "hanzi": "今天",
        "gloss": "today"
      },
      {
        "pinyin": "míng tiān",
        "hanzi": "明天",
        "gloss": "tomorrow"
      },
      {
        "pinyin": "zuó tiān",
        "hanzi": "昨天",
        "gloss": "yesterday"
      },
      {
        "pinyin": "jīnnián",
        "hanzi": "今年",
        "gloss": "this year"
      },
      {
        "pinyin": "míngnián",
        "hanzi": "明年",
        "gloss": "next year"
      },
      {
        "pinyin": "qù nián",
        "hanzi": "去年",
        "gloss": "last year"
      },
      {
        "pinyin": "zǎo shang",
        "hanzi": "早上",
        "gloss": "morning"
      },
      {
        "pinyin": "shàng wǔ",
        "hanzi": "上午",
        "gloss": "late morning"
      },
      {
        "pinyin": "zhōng wǔ",
        "hanzi": "中午",
        "gloss": "noon"
      },
      {
        "pinyin": "xià wǔ",
        "hanzi": "下午",
        "gloss": "afternoon"
      },
      {
        "pinyin": "wǎn shang",
        "hanzi": "晚上",
        "gloss": "evening"
      },
      {
        "pinyin": "báitiān",
        "hanzi": "白天",
        "gloss": "daytime"
      },
      {
        "pinyin": "diǎn",
        "hanzi": "点",
        "gloss": "o'clock"
      },
      {
        "pinyin": "fēn",
        "hanzi": "分",
        "gloss": "minute"
      },
      {
        "pinyin": "fēn zhōng",
        "hanzi": "分钟",
        "gloss": "minute (duration)"
      },
      {
        "pinyin": "xiǎo shí",
        "hanzi": "小时",
        "gloss": "hour"
      },
      {
        "pinyin": "shí hou",
        "hanzi": "时候",
        "gloss": "time / moment"
      },
      {
        "pinyin": "shí jiān",
        "hanzi": "时间",
        "gloss": "time"
      }
    ]
  },
  {
    "id": "people",
    "name": "People & Family",
    "words": [
      {
        "pinyin": "rén",
        "hanzi": "人",
        "gloss": "person"
      },
      {
        "pinyin": "nán",
        "hanzi": "男",
        "gloss": "male"
      },
      {
        "pinyin": "nǚ",
        "hanzi": "女",
        "gloss": "female"
      },
      {
        "pinyin": "bà ba",
        "hanzi": "爸爸",
        "gloss": "dad"
      },
      {
        "pinyin": "mā ma",
        "hanzi": "妈妈",
        "gloss": "mom"
      },
      {
        "pinyin": "gē ge",
        "hanzi": "哥哥",
        "gloss": "older brother"
      },
      {
        "pinyin": "dì di",
        "hanzi": "弟弟",
        "gloss": "younger brother"
      },
      {
        "pinyin": "jiě jie",
        "hanzi": "姐姐",
        "gloss": "older sister"
      },
      {
        "pinyin": "mèi mei",
        "hanzi": "妹妹",
        "gloss": "younger sister"
      },
      {
        "pinyin": "ér zi",
        "hanzi": "儿子",
        "gloss": "son"
      },
      {
        "pinyin": "nǚ ér",
        "hanzi": "女儿",
        "gloss": "daughter"
      },
      {
        "pinyin": "hái zi",
        "hanzi": "孩子",
        "gloss": "child"
      },
      {
        "pinyin": "jiā",
        "hanzi": "家",
        "gloss": "home / family"
      },
      {
        "pinyin": "jiārén",
        "hanzi": "家人",
        "gloss": "family member"
      },
      {
        "pinyin": "péng you",
        "hanzi": "朋友",
        "gloss": "friend"
      },
      {
        "pinyin": "nánpéngyou",
        "hanzi": "男朋友",
        "gloss": "boyfriend"
      },
      {
        "pinyin": "nǚpéngyou",
        "hanzi": "女朋友",
        "gloss": "girlfriend"
      },
      {
        "pinyin": "xiān sheng",
        "hanzi": "先生",
        "gloss": "mister / sir"
      },
      {
        "pinyin": "nǚ shì",
        "hanzi": "女士",
        "gloss": "lady / Ms."
      },
      {
        "pinyin": "lǎo shī",
        "hanzi": "老师",
        "gloss": "teacher"
      },
      {
        "pinyin": "yī shēng",
        "hanzi": "医生",
        "gloss": "doctor"
      },
      {
        "pinyin": "tóng xué",
        "hanzi": "同学",
        "gloss": "classmate"
      },
      {
        "pinyin": "suì",
        "hanzi": "岁",
        "gloss": "years old"
      }
    ]
  },
  {
    "id": "pronouns",
    "name": "Pronouns",
    "words": [
      {
        "pinyin": "wǒ",
        "hanzi": "我",
        "gloss": "I / me"
      },
      {
        "pinyin": "wǒ men",
        "hanzi": "我们",
        "gloss": "we / us"
      },
      {
        "pinyin": "nǐ",
        "hanzi": "你",
        "gloss": "you"
      },
      {
        "pinyin": "nǐmen",
        "hanzi": "你们",
        "gloss": "you (plural)"
      },
      {
        "pinyin": "nín",
        "hanzi": "您",
        "gloss": "you (polite)"
      },
      {
        "pinyin": "tā",
        "hanzi": "他",
        "gloss": "he / him"
      },
      {
        "pinyin": "tā",
        "hanzi": "她",
        "gloss": "she / her"
      },
      {
        "pinyin": "tā",
        "hanzi": "它",
        "gloss": "it"
      },
      {
        "pinyin": "tāmen",
        "hanzi": "他们",
        "gloss": "they"
      },
      {
        "pinyin": "tāmen",
        "hanzi": "她们",
        "gloss": "they (female)"
      },
      {
        "pinyin": "tāmen",
        "hanzi": "它们",
        "gloss": "they (objects)"
      }
    ]
  },
  {
    "id": "question",
    "name": "Question Words",
    "words": [
      {
        "pinyin": "shéi",
        "hanzi": "谁",
        "gloss": "who"
      },
      {
        "pinyin": "shén me",
        "hanzi": "什么",
        "gloss": "what"
      },
      {
        "pinyin": "nǎ",
        "hanzi": "哪",
        "gloss": "which"
      },
      {
        "pinyin": "nǎge",
        "hanzi": "哪个",
        "gloss": "which one"
      },
      {
        "pinyin": "nǎxiē",
        "hanzi": "哪些",
        "gloss": "which ones"
      },
      {
        "pinyin": "nǎ er",
        "hanzi": "哪儿",
        "gloss": "where"
      },
      {
        "pinyin": "nǎlǐ",
        "hanzi": "哪里",
        "gloss": "where"
      },
      {
        "pinyin": "zěn me",
        "hanzi": "怎么",
        "gloss": "how"
      },
      {
        "pinyin": "zěn me yàng",
        "hanzi": "怎么样",
        "gloss": "how about"
      },
      {
        "pinyin": "wèn tí",
        "hanzi": "问题",
        "gloss": "question / problem"
      },
      {
        "pinyin": "qǐngwèn",
        "hanzi": "请问",
        "gloss": "may I ask"
      }
    ]
  },
  {
    "id": "food",
    "name": "Food & Drink",
    "words": [
      {
        "pinyin": "fàn",
        "hanzi": "饭",
        "gloss": "meal / rice"
      },
      {
        "pinyin": "mǐ fàn",
        "hanzi": "米饭",
        "gloss": "cooked rice"
      },
      {
        "pinyin": "zǎofàn",
        "hanzi": "早饭",
        "gloss": "breakfast"
      },
      {
        "pinyin": "wǔfàn",
        "hanzi": "午饭",
        "gloss": "lunch"
      },
      {
        "pinyin": "wǎnfàn",
        "hanzi": "晚饭",
        "gloss": "dinner"
      },
      {
        "pinyin": "cài",
        "hanzi": "菜",
        "gloss": "dish / vegetable"
      },
      {
        "pinyin": "miàn bāo",
        "hanzi": "面包",
        "gloss": "bread"
      },
      {
        "pinyin": "miàntiáor",
        "hanzi": "面条儿",
        "gloss": "noodles"
      },
      {
        "pinyin": "bāo zi",
        "hanzi": "包子",
        "gloss": "steamed bun"
      },
      {
        "pinyin": "jiǎo zi",
        "hanzi": "饺子",
        "gloss": "dumpling"
      },
      {
        "pinyin": "jī dàn",
        "hanzi": "鸡蛋",
        "gloss": "egg"
      },
      {
        "pinyin": "shuǐ guǒ",
        "hanzi": "水果",
        "gloss": "fruit"
      },
      {
        "pinyin": "píng guǒ",
        "hanzi": "苹果",
        "gloss": "apple"
      },
      {
        "pinyin": "shuǐ",
        "hanzi": "水",
        "gloss": "water"
      },
      {
        "pinyin": "chá",
        "hanzi": "茶",
        "gloss": "tea"
      },
      {
        "pinyin": "niú nǎi",
        "hanzi": "牛奶",
        "gloss": "milk"
      },
      {
        "pinyin": "kǒu",
        "hanzi": "口",
        "gloss": "mouth"
      }
    ]
  },
  {
    "id": "places",
    "name": "Places",
    "words": [
      {
        "pinyin": "guó",
        "hanzi": "国",
        "gloss": "country"
      },
      {
        "pinyin": "zhōng guó",
        "hanzi": "中国",
        "gloss": "China"
      },
      {
        "pinyin": "diàn",
        "hanzi": "店",
        "gloss": "shop"
      },
      {
        "pinyin": "shāng diàn",
        "hanzi": "商店",
        "gloss": "store"
      },
      {
        "pinyin": "chāo shì",
        "hanzi": "超市",
        "gloss": "supermarket"
      },
      {
        "pinyin": "shūdiàn",
        "hanzi": "书店",
        "gloss": "bookstore"
      },
      {
        "pinyin": "fàn diàn",
        "hanzi": "饭店",
        "gloss": "restaurant"
      },
      {
        "pinyin": "diànyǐngyuàn",
        "hanzi": "电影院",
        "gloss": "cinema"
      },
      {
        "pinyin": "yī yuàn",
        "hanzi": "医院",
        "gloss": "hospital"
      },
      {
        "pinyin": "fáng jiān",
        "hanzi": "房间",
        "gloss": "room"
      },
      {
        "pinyin": "xué xiào",
        "hanzi": "学校",
        "gloss": "school"
      },
      {
        "pinyin": "xiǎoxué",
        "hanzi": "小学",
        "gloss": "primary school"
      },
      {
        "pinyin": "zhōngxué",
        "hanzi": "中学",
        "gloss": "middle school"
      },
      {
        "pinyin": "dàxué",
        "hanzi": "大学",
        "gloss": "university"
      },
      {
        "pinyin": "gōng sī",
        "hanzi": "公司",
        "gloss": "company"
      }
    ]
  },
  {
    "id": "school",
    "name": "School & Study",
    "words": [
      {
        "pinyin": "xué",
        "hanzi": "学",
        "gloss": "study / learn"
      },
      {
        "pinyin": "xué xí",
        "hanzi": "学习",
        "gloss": "study"
      },
      {
        "pinyin": "xué sheng",
        "hanzi": "学生",
        "gloss": "student"
      },
      {
        "pinyin": "xiǎoxuéshēng",
        "hanzi": "小学生",
        "gloss": "primary student"
      },
      {
        "pinyin": "zhōngxuéshēng",
        "hanzi": "中学生",
        "gloss": "middle school student"
      },
      {
        "pinyin": "dàxuéshēng",
        "hanzi": "大学生",
        "gloss": "university student"
      },
      {
        "pinyin": "xiǎopéngyou",
        "hanzi": "小朋友",
        "gloss": "child / kid"
      },
      {
        "pinyin": "shàngxué",
        "hanzi": "上学",
        "gloss": "go to school"
      },
      {
        "pinyin": "kè",
        "hanzi": "课",
        "gloss": "class / lesson"
      },
      {
        "pinyin": "shàngkè",
        "hanzi": "上课",
        "gloss": "go to class"
      },
      {
        "pinyin": "xiàkè",
        "hanzi": "下课",
        "gloss": "finish class"
      },
      {
        "pinyin": "shū",
        "hanzi": "书",
        "gloss": "book"
      },
      {
        "pinyin": "dúshū",
        "hanzi": "读书",
        "gloss": "study / read"
      },
      {
        "pinyin": "zì",
        "hanzi": "字",
        "gloss": "character"
      }
    ]
  },
  {
    "id": "daily",
    "name": "Daily Actions (Verbs)",
    "words": [
      {
        "pinyin": "chī",
        "hanzi": "吃",
        "gloss": "eat"
      },
      {
        "pinyin": "hē",
        "hanzi": "喝",
        "gloss": "drink"
      },
      {
        "pinyin": "zuò fàn",
        "hanzi": "做饭",
        "gloss": "cook"
      },
      {
        "pinyin": "mǎi",
        "hanzi": "买",
        "gloss": "buy"
      },
      {
        "pinyin": "mài",
        "hanzi": "卖",
        "gloss": "sell"
      },
      {
        "pinyin": "chuān",
        "hanzi": "穿",
        "gloss": "wear"
      },
      {
        "pinyin": "qǐ chuáng",
        "hanzi": "起床",
        "gloss": "get up"
      },
      {
        "pinyin": "shuì",
        "hanzi": "睡",
        "gloss": "sleep"
      },
      {
        "pinyin": "shuì jiào",
        "hanzi": "睡觉",
        "gloss": "sleep"
      },
      {
        "pinyin": "xiū xi",
        "hanzi": "休息",
        "gloss": "rest"
      },
      {
        "pinyin": "kàn",
        "hanzi": "看",
        "gloss": "look / watch"
      },
      {
        "pinyin": "kàn jiàn",
        "hanzi": "看见",
        "gloss": "see"
      },
      {
        "pinyin": "jiàn",
        "hanzi": "见",
        "gloss": "see"
      },
      {
        "pinyin": "tīng",
        "hanzi": "听",
        "gloss": "listen"
      },
      {
        "pinyin": "tīngjiàn",
        "hanzi": "听见",
        "gloss": "hear"
      },
      {
        "pinyin": "dú",
        "hanzi": "读",
        "gloss": "read"
      },
      {
        "pinyin": "xiě",
        "hanzi": "写",
        "gloss": "write"
      },
      {
        "pinyin": "chàng",
        "hanzi": "唱",
        "gloss": "sing"
      },
      {
        "pinyin": "wán",
        "hanzi": "玩",
        "gloss": "play"
      },
      {
        "pinyin": "zuò",
        "hanzi": "坐",
        "gloss": "sit"
      },
      {
        "pinyin": "zuò",
        "hanzi": "做",
        "gloss": "do / make"
      },
      {
        "pinyin": "qù",
        "hanzi": "去",
        "gloss": "go"
      },
      {
        "pinyin": "lái",
        "hanzi": "来",
        "gloss": "come"
      },
      {
        "pinyin": "huí",
        "hanzi": "回",
        "gloss": "return"
      },
      {
        "pinyin": "dào",
        "hanzi": "到",
        "gloss": "arrive"
      },
      {
        "pinyin": "kāi",
        "hanzi": "开",
        "gloss": "open"
      },
      {
        "pinyin": "zhǎo",
        "hanzi": "找",
        "gloss": "look for"
      },
      {
        "pinyin": "zhù",
        "hanzi": "住",
        "gloss": "live / reside"
      },
      {
        "pinyin": "gōng zuò",
        "hanzi": "工作",
        "gloss": "work"
      },
      {
        "pinyin": "shàng bān",
        "hanzi": "上班",
        "gloss": "go to work"
      }
    ]
  },
  {
    "id": "communication",
    "name": "Communication",
    "words": [
      {
        "pinyin": "shuō",
        "hanzi": "说",
        "gloss": "speak"
      },
      {
        "pinyin": "shuō huà",
        "hanzi": "说话",
        "gloss": "talk"
      },
      {
        "pinyin": "wèn",
        "hanzi": "问",
        "gloss": "ask"
      },
      {
        "pinyin": "jiào",
        "hanzi": "叫",
        "gloss": "call / be named"
      },
      {
        "pinyin": "míng zi",
        "hanzi": "名字",
        "gloss": "name"
      },
      {
        "pinyin": "dǎ diàn huà",
        "hanzi": "打电话",
        "gloss": "make a phone call"
      },
      {
        "pinyin": "diànhuà",
        "hanzi": "电话",
        "gloss": "telephone"
      },
      {
        "pinyin": "shǒu jī",
        "hanzi": "手机",
        "gloss": "mobile phone"
      },
      {
        "pinyin": "hàn yǔ",
        "hanzi": "汉语",
        "gloss": "Chinese language"
      },
      {
        "pinyin": "hànzì",
        "hanzi": "汉字",
        "gloss": "Chinese character"
      },
      {
        "pinyin": "zhōng wén",
        "hanzi": "中文",
        "gloss": "Chinese (written)"
      },
      {
        "pinyin": "gē",
        "hanzi": "歌",
        "gloss": "song"
      }
    ]
  },
  {
    "id": "transport",
    "name": "Transport & Travel",
    "words": [
      {
        "pinyin": "chē",
        "hanzi": "车",
        "gloss": "car / vehicle"
      },
      {
        "pinyin": "chū zū chē",
        "hanzi": "出租车",
        "gloss": "taxi"
      },
      {
        "pinyin": "huǒchē",
        "hanzi": "火车",
        "gloss": "train"
      },
      {
        "pinyin": "fēi jī",
        "hanzi": "飞机",
        "gloss": "airplane"
      },
      {
        "pinyin": "kāichē",
        "hanzi": "开车",
        "gloss": "drive"
      },
      {
        "pinyin": "xiàbān",
        "hanzi": "下班",
        "gloss": "get off work"
      },
      {
        "pinyin": "kànbìng",
        "hanzi": "看病",
        "gloss": "see a doctor"
      }
    ]
  },
  {
    "id": "objects",
    "name": "Objects & Things",
    "words": [
      {
        "pinyin": "dōng xi",
        "hanzi": "东西",
        "gloss": "thing"
      },
      {
        "pinyin": "bēi zi",
        "hanzi": "杯子",
        "gloss": "cup"
      },
      {
        "pinyin": "yǐ zi",
        "hanzi": "椅子",
        "gloss": "chair"
      },
      {
        "pinyin": "zhuō zi",
        "hanzi": "桌子",
        "gloss": "table"
      },
      {
        "pinyin": "yī fu",
        "hanzi": "衣服",
        "gloss": "clothes"
      },
      {
        "pinyin": "diàn nǎo",
        "hanzi": "电脑",
        "gloss": "computer"
      },
      {
        "pinyin": "diàn shì",
        "hanzi": "电视",
        "gloss": "television"
      },
      {
        "pinyin": "diàn yǐng",
        "hanzi": "电影",
        "gloss": "movie"
      },
      {
        "pinyin": "qián",
        "hanzi": "钱",
        "gloss": "money"
      },
      {
        "pinyin": "yuán",
        "hanzi": "元",
        "gloss": "yuan (currency)"
      },
      {
        "pinyin": "kuài",
        "hanzi": "块",
        "gloss": "measure word (money)"
      },
      {
        "pinyin": "gǒu",
        "hanzi": "狗",
        "gloss": "dog"
      },
      {
        "pinyin": "māo",
        "hanzi": "猫",
        "gloss": "cat"
      }
    ]
  },
  {
    "id": "descriptors",
    "name": "Adjectives & Descriptors",
    "words": [
      {
        "pinyin": "dà",
        "hanzi": "大",
        "gloss": "big"
      },
      {
        "pinyin": "xiǎo",
        "hanzi": "小",
        "gloss": "small"
      },
      {
        "pinyin": "duō",
        "hanzi": "多",
        "gloss": "many"
      },
      {
        "pinyin": "shǎo",
        "hanzi": "少",
        "gloss": "few"
      },
      {
        "pinyin": "hǎo",
        "hanzi": "好",
        "gloss": "good"
      },
      {
        "pinyin": "hǎo chī",
        "hanzi": "好吃",
        "gloss": "delicious"
      },
      {
        "pinyin": "hǎokàn",
        "hanzi": "好看",
        "gloss": "good-looking"
      },
      {
        "pinyin": "hǎotīng",
        "hanzi": "好听",
        "gloss": "pleasant-sounding"
      },
      {
        "pinyin": "hǎowánr",
        "hanzi": "好玩儿",
        "gloss": "fun"
      },
      {
        "pinyin": "piào liang",
        "hanzi": "漂亮",
        "gloss": "beautiful"
      },
      {
        "pinyin": "guì",
        "hanzi": "贵",
        "gloss": "expensive"
      },
      {
        "pinyin": "pián yi",
        "hanzi": "便宜",
        "gloss": "cheap"
      },
      {
        "pinyin": "xīn",
        "hanzi": "新",
        "gloss": "new"
      },
      {
        "pinyin": "máng",
        "hanzi": "忙",
        "gloss": "busy"
      },
      {
        "pinyin": "gāo xìng",
        "hanzi": "高兴",
        "gloss": "happy"
      },
      {
        "pinyin": "zǎo",
        "hanzi": "早",
        "gloss": "early"
      },
      {
        "pinyin": "wǎn",
        "hanzi": "晚",
        "gloss": "late"
      }
    ]
  },
  {
    "id": "weather",
    "name": "Weather & Nature",
    "words": [
      {
        "pinyin": "tiān qì",
        "hanzi": "天气",
        "gloss": "weather"
      },
      {
        "pinyin": "rè",
        "hanzi": "热",
        "gloss": "hot"
      },
      {
        "pinyin": "lěng",
        "hanzi": "冷",
        "gloss": "cold"
      },
      {
        "pinyin": "yǔ",
        "hanzi": "雨",
        "gloss": "rain"
      },
      {
        "pinyin": "xià yǔ",
        "hanzi": "下雨",
        "gloss": "to rain"
      },
      {
        "pinyin": "xuě",
        "hanzi": "雪",
        "gloss": "snow"
      },
      {
        "pinyin": "bìng",
        "hanzi": "病",
        "gloss": "illness"
      }
    ]
  },
  {
    "id": "location",
    "name": "Location & Direction",
    "words": [
      {
        "pinyin": "shàng",
        "hanzi": "上",
        "gloss": "on / up"
      },
      {
        "pinyin": "xià",
        "hanzi": "下",
        "gloss": "down / below"
      },
      {
        "pinyin": "qián",
        "hanzi": "前",
        "gloss": "front / before"
      },
      {
        "pinyin": "hòu",
        "hanzi": "后",
        "gloss": "after / behind"
      },
      {
        "pinyin": "lǐ",
        "hanzi": "里",
        "gloss": "inside"
      },
      {
        "pinyin": "wài",
        "hanzi": "外",
        "gloss": "outside"
      },
      {
        "pinyin": "wàibian",
        "hanzi": "外边",
        "gloss": "outside"
      },
      {
        "pinyin": "biān",
        "hanzi": "边",
        "gloss": "side"
      },
      {
        "pinyin": "zhè",
        "hanzi": "这",
        "gloss": "this"
      },
      {
        "pinyin": "zhège",
        "hanzi": "这个",
        "gloss": "this one"
      },
      {
        "pinyin": "zhèxiē",
        "hanzi": "这些",
        "gloss": "these"
      },
      {
        "pinyin": "zhèlǐ",
        "hanzi": "这里",
        "gloss": "here"
      },
      {
        "pinyin": "zhèr",
        "hanzi": "这儿",
        "gloss": "here"
      },
      {
        "pinyin": "zhèbiān",
        "hanzi": "这边",
        "gloss": "this side"
      },
      {
        "pinyin": "nà",
        "hanzi": "那",
        "gloss": "that"
      },
      {
        "pinyin": "nàge",
        "hanzi": "那个",
        "gloss": "that one"
      }
    ]
  },
  {
    "id": "grammar",
    "name": "Grammar & Function Words",
    "words": [
      {
        "pinyin": "de",
        "hanzi": "的",
        "gloss": "possessive particle"
      },
      {
        "pinyin": "le",
        "hanzi": "了",
        "gloss": "aspect particle"
      },
      {
        "pinyin": "ma",
        "hanzi": "吗",
        "gloss": "question particle"
      },
      {
        "pinyin": "ne",
        "hanzi": "呢",
        "gloss": "particle"
      },
      {
        "pinyin": "ba",
        "hanzi": "吧",
        "gloss": "particle"
      },
      {
        "pinyin": "shì",
        "hanzi": "是",
        "gloss": "to be"
      },
      {
        "pinyin": "yǒu",
        "hanzi": "有",
        "gloss": "have"
      },
      {
        "pinyin": "méi yǒu",
        "hanzi": "没有",
        "gloss": "don't have"
      },
      {
        "pinyin": "bù",
        "hanzi": "不",
        "gloss": "no / not"
      },
      {
        "pinyin": "zài",
        "hanzi": "在",
        "gloss": "at / in"
      },
      {
        "pinyin": "zài",
        "hanzi": "再",
        "gloss": "again"
      },
      {
        "pinyin": "zhèng zài",
        "hanzi": "正在",
        "gloss": "in the middle of"
      },
      {
        "pinyin": "hé",
        "hanzi": "和",
        "gloss": "and"
      },
      {
        "pinyin": "yě",
        "hanzi": "也",
        "gloss": "also"
      },
      {
        "pinyin": "dōu",
        "hanzi": "都",
        "gloss": "all"
      },
      {
        "pinyin": "hái",
        "hanzi": "还",
        "gloss": "still / also"
      },
      {
        "pinyin": "men",
        "hanzi": "们",
        "gloss": "plural suffix"
      },
      {
        "pinyin": "gè",
        "hanzi": "个",
        "gloss": "measure word"
      },
      {
        "pinyin": "běn",
        "hanzi": "本",
        "gloss": "MW (books)"
      },
      {
        "pinyin": "jiàn",
        "hanzi": "件",
        "gloss": "measure word"
      },
      {
        "pinyin": "xiē",
        "hanzi": "些",
        "gloss": "some"
      },
      {
        "pinyin": "dì",
        "hanzi": "第",
        "gloss": "ordinal prefix"
      },
      {
        "pinyin": "huì",
        "hanzi": "会",
        "gloss": "can / will"
      },
      {
        "pinyin": "néng",
        "hanzi": "能",
        "gloss": "can / able to"
      },
      {
        "pinyin": "kě yǐ",
        "hanzi": "可以",
        "gloss": "can / may"
      },
      {
        "pinyin": "yào",
        "hanzi": "要",
        "gloss": "want"
      },
      {
        "pinyin": "xiǎng",
        "hanzi": "想",
        "gloss": "want / think"
      },
      {
        "pinyin": "jué de",
        "hanzi": "觉得",
        "gloss": "feel / think"
      },
      {
        "pinyin": "xǐ huan",
        "hanzi": "喜欢",
        "gloss": "like"
      },
      {
        "pinyin": "ài",
        "hanzi": "爱",
        "gloss": "love"
      },
      {
        "pinyin": "gěi",
        "hanzi": "给",
        "gloss": "give"
      }
    ]
  },
  {
    "id": "greetings",
    "name": "Greetings, Adverbs & Common Phrases",
    "words": [
      {
        "pinyin": "nǐ hǎo",
        "hanzi": "你好",
        "gloss": "hello"
      },
      {
        "pinyin": "zài jiàn",
        "hanzi": "再见",
        "gloss": "goodbye"
      },
      {
        "pinyin": "xiè xie",
        "hanzi": "谢谢",
        "gloss": "thanks"
      },
      {
        "pinyin": "bú kè qi",
        "hanzi": "不客气",
        "gloss": "you're welcome"
      },
      {
        "pinyin": "duì bu qǐ",
        "hanzi": "对不起",
        "gloss": "sorry"
      },
      {
        "pinyin": "méi guān xi",
        "hanzi": "没关系",
        "gloss": "it's okay"
      },
      {
        "pinyin": "méishì",
        "hanzi": "没事",
        "gloss": "no problem"
      },
      {
        "pinyin": "qǐng",
        "hanzi": "请",
        "gloss": "please"
      },
      {
        "pinyin": "wèi",
        "hanzi": "喂",
        "gloss": "hello (on phone)"
      },
      {
        "pinyin": "duì",
        "hanzi": "对",
        "gloss": "correct"
      },
      {
        "pinyin": "rèn shi",
        "hanzi": "认识",
        "gloss": "know / recognize"
      },
      {
        "pinyin": "zhī dào",
        "hanzi": "知道",
        "gloss": "know"
      },
      {
        "pinyin": "shēng bìng",
        "hanzi": "生病",
        "gloss": "get sick"
      },
      {
        "pinyin": "shì",
        "hanzi": "事",
        "gloss": "matter / affair"
      },
      {
        "pinyin": "dà jiā",
        "hanzi": "大家",
        "gloss": "everyone"
      },
      {
        "pinyin": "hěn",
        "hanzi": "很",
        "gloss": "very"
      },
      {
        "pinyin": "tài",
        "hanzi": "太",
        "gloss": "too"
      },
      {
        "pinyin": "fēi cháng",
        "hanzi": "非常",
        "gloss": "very / extremely"
      },
      {
        "pinyin": "zhēn",
        "hanzi": "真",
        "gloss": "really / true"
      },
      {
        "pinyin": "zhī",
        "hanzi": "只",
        "gloss": "only"
      },
      {
        "pinyin": "xiàn zài",
        "hanzi": "现在",
        "gloss": "now"
      },
      {
        "pinyin": "yī xià",
        "hanzi": "一下",
        "gloss": "briefly / a bit"
      },
      {
        "pinyin": "yǒude",
        "hanzi": "有的",
        "gloss": "some"
      },
      {
        "pinyin": "yǒuxiē",
        "hanzi": "有些",
        "gloss": "some"
      },
      {
        "pinyin": "yǒudiǎnr",
        "hanzi": "有点儿",
        "gloss": "a little / kind of"
      },
      {
        "pinyin": "nàbiān",
        "hanzi": "那边",
        "gloss": "over there"
      },
      {
        "pinyin": "nàlǐ",
        "hanzi": "那里",
        "gloss": "there"
      },
      {
        "pinyin": "nàr",
        "hanzi": "那儿",
        "gloss": "there"
      },
      {
        "pinyin": "nàxiē",
        "hanzi": "那些",
        "gloss": "those"
      },
      {
        "pinyin": "búyào",
        "hanzi": "不要",
        "gloss": "don't want"
      }
    ]
  }
];

// Definitions and example sentences for all 300 HSK 1 words
const wordData = {
  "爱": { def: "To love; to like deeply.", ex: [{ cn: "我爱我的家人。", py: "Wǒ ài wǒ de jiārén.", en: "I love my family." }] },
  "吧": { def: "Modal particle indicating suggestion, request, or supposition.", ex: [{ cn: "我们走吧。", py: "Wǒmen zǒu ba.", en: "Let's go." }] },
  "八": { def: "The number eight (8).", ex: [{ cn: "我有八个苹果。", py: "Wǒ yǒu bā gè píngguǒ.", en: "I have eight apples." }] },
  "爸爸": { def: "Father; dad.", ex: [{ cn: "我爸爸是医生。", py: "Wǒ bàba shì yīshēng.", en: "My dad is a doctor." }] },
  "百": { def: "One hundred (100).", ex: [{ cn: "这本书一百块钱。", py: "Zhè běn shū yìbǎi kuài qián.", en: "This book costs 100 yuan." }] },
  "白天": { def: "Daytime; during the day.", ex: [{ cn: "我白天上班。", py: "Wǒ báitiān shàngbān.", en: "I work during the day." }] },
  "半": { def: "Half.", ex: [{ cn: "现在是八点半。", py: "Xiànzài shì bā diǎn bàn.", en: "It's half past eight." }] },
  "包子": { def: "Steamed bun (typically with filling).", ex: [{ cn: "我喜欢吃包子。", py: "Wǒ xǐhuan chī bāozi.", en: "I like to eat baozi." }] },
  "杯子": { def: "Cup; glass.", ex: [{ cn: "这个杯子是我的。", py: "Zhège bēizi shì wǒ de.", en: "This cup is mine." }] },
  "本": { def: "Measure word for books and bound items.", ex: [{ cn: "我有三本书。", py: "Wǒ yǒu sān běn shū.", en: "I have three books." }] },
  "边": { def: "Side; edge.", ex: [{ cn: "我家在学校的西边。", py: "Wǒ jiā zài xuéxiào de xībiān.", en: "My home is on the west side of the school." }] },
  "病": { def: "Illness; to be sick.", ex: [{ cn: "他病了。", py: "Tā bìng le.", en: "He is sick." }] },
  "不": { def: "Not; no (general negation).", ex: [{ cn: "我不喝茶。", py: "Wǒ bù hē chá.", en: "I don't drink tea." }] },
  "不客气": { def: "You're welcome; don't mention it.", ex: [{ cn: "—谢谢!—不客气。", py: "—Xièxie! —Bú kèqi.", en: "—Thanks! —You're welcome." }] },
  "不要": { def: "Don't; do not want.", ex: [{ cn: "不要担心。", py: "Búyào dānxīn.", en: "Don't worry." }] },
  "菜": { def: "Dish (of food); vegetable.", ex: [{ cn: "这个菜很好吃。", py: "Zhège cài hěn hǎochī.", en: "This dish is delicious." }] },
  "茶": { def: "Tea.", ex: [{ cn: "我喜欢喝茶。", py: "Wǒ xǐhuan hē chá.", en: "I like to drink tea." }] },
  "唱": { def: "To sing.", ex: [{ cn: "她唱得很好。", py: "Tā chàng de hěn hǎo.", en: "She sings very well." }] },
  "超市": { def: "Supermarket.", ex: [{ cn: "我去超市买东西。", py: "Wǒ qù chāoshì mǎi dōngxi.", en: "I'm going to the supermarket to buy things." }] },
  "车": { def: "Car; vehicle.", ex: [{ cn: "这是我的车。", py: "Zhè shì wǒ de chē.", en: "This is my car." }] },
  "吃": { def: "To eat.", ex: [{ cn: "你吃什么?", py: "Nǐ chī shénme?", en: "What are you eating?" }] },
  "穿": { def: "To wear; to put on (clothes).", ex: [{ cn: "她穿了一件红衣服。", py: "Tā chuān le yí jiàn hóng yīfu.", en: "She is wearing a red outfit." }] },
  "出租车": { def: "Taxi.", ex: [{ cn: "我们坐出租车去吧。", py: "Wǒmen zuò chūzūchē qù ba.", en: "Let's take a taxi." }] },
  "大": { def: "Big; large.", ex: [{ cn: "这个房间很大。", py: "Zhège fángjiān hěn dà.", en: "This room is very big." }] },
  "打电话": { def: "To make a phone call.", ex: [{ cn: "我给妈妈打电话。", py: "Wǒ gěi māma dǎ diànhuà.", en: "I'm calling my mom." }] },
  "大家": { def: "Everyone; everybody.", ex: [{ cn: "大家好!", py: "Dàjiā hǎo!", en: "Hello everyone!" }] },
  "到": { def: "To arrive; to reach.", ex: [{ cn: "我到学校了。", py: "Wǒ dào xuéxiào le.", en: "I've arrived at school." }] },
  "大学": { def: "University; college.", ex: [{ cn: "她在大学学习。", py: "Tā zài dàxué xuéxí.", en: "She studies at university." }] },
  "大学生": { def: "University student.", ex: [{ cn: "我哥哥是大学生。", py: "Wǒ gēge shì dàxuéshēng.", en: "My older brother is a university student." }] },
  "的": { def: "Possessive/attributive particle linking modifier to noun.", ex: [{ cn: "这是我的书。", py: "Zhè shì wǒ de shū.", en: "This is my book." }] },
  "第": { def: "Prefix forming ordinal numbers (first, second, etc.).", ex: [{ cn: "我是第一个。", py: "Wǒ shì dì-yī gè.", en: "I'm the first one." }] },
  "店": { def: "Shop; store.", ex: [{ cn: "这家店很有名。", py: "Zhè jiā diàn hěn yǒumíng.", en: "This shop is very famous." }] },
  "点": { def: "O'clock; a point; a little.", ex: [{ cn: "现在三点。", py: "Xiànzài sān diǎn.", en: "It's three o'clock now." }] },
  "电话": { def: "Telephone; phone call.", ex: [{ cn: "你的电话号码是多少?", py: "Nǐ de diànhuà hàomǎ shì duōshǎo?", en: "What's your phone number?" }] },
  "电脑": { def: "Computer.", ex: [{ cn: "我的电脑很新。", py: "Wǒ de diànnǎo hěn xīn.", en: "My computer is new." }] },
  "电视": { def: "Television.", ex: [{ cn: "晚上我看电视。", py: "Wǎnshang wǒ kàn diànshì.", en: "I watch TV in the evening." }] },
  "电影": { def: "Movie; film.", ex: [{ cn: "这部电影很好看。", py: "Zhè bù diànyǐng hěn hǎokàn.", en: "This movie is great." }] },
  "电影院": { def: "Cinema; movie theater.", ex: [{ cn: "电影院在哪儿?", py: "Diànyǐngyuàn zài nǎr?", en: "Where is the cinema?" }] },
  "弟弟": { def: "Younger brother.", ex: [{ cn: "我弟弟十岁。", py: "Wǒ dìdi shí suì.", en: "My younger brother is ten years old." }] },
  "东西": { def: "Thing; object; stuff.", ex: [{ cn: "我要买东西。", py: "Wǒ yào mǎi dōngxi.", en: "I want to buy some things." }] },
  "都": { def: "All; both.", ex: [{ cn: "我们都是学生。", py: "Wǒmen dōu shì xuésheng.", en: "We are all students." }] },
  "读": { def: "To read; to study.", ex: [{ cn: "他在读书。", py: "Tā zài dú shū.", en: "He is reading." }] },
  "对": { def: "Correct; right; toward.", ex: [{ cn: "你说得对。", py: "Nǐ shuō de duì.", en: "You're right." }] },
  "对不起": { def: "Sorry; excuse me.", ex: [{ cn: "对不起,我迟到了。", py: "Duìbuqǐ, wǒ chídào le.", en: "Sorry, I'm late." }] },
  "多": { def: "Many; much; a lot.", ex: [{ cn: "今天人很多。", py: "Jīntiān rén hěn duō.", en: "There are many people today." }] },
  "多少": { def: "How many; how much.", ex: [{ cn: "这个多少钱?", py: "Zhège duōshǎo qián?", en: "How much is this?" }] },
  "读书": { def: "To read; to study.", ex: [{ cn: "我喜欢读书。", py: "Wǒ xǐhuan dúshū.", en: "I like to read." }] },
  "二": { def: "The number two (2).", ex: [{ cn: "二加二等于四。", py: "Èr jiā èr děngyú sì.", en: "Two plus two equals four." }] },
  "儿子": { def: "Son.", ex: [{ cn: "他有一个儿子。", py: "Tā yǒu yí gè érzi.", en: "He has one son." }] },
  "饭": { def: "Cooked rice; meal.", ex: [{ cn: "吃饭了吗?", py: "Chī fàn le ma?", en: "Have you eaten?" }] },
  "饭店": { def: "Restaurant; hotel.", ex: [{ cn: "我们去饭店吃饭。", py: "Wǒmen qù fàndiàn chī fàn.", en: "Let's go eat at a restaurant." }] },
  "房间": { def: "Room.", ex: [{ cn: "我的房间很小。", py: "Wǒ de fángjiān hěn xiǎo.", en: "My room is small." }] },
  "非常": { def: "Very; extremely.", ex: [{ cn: "今天非常热。", py: "Jīntiān fēicháng rè.", en: "It's extremely hot today." }] },
  "飞机": { def: "Airplane.", ex: [{ cn: "我坐飞机去北京。", py: "Wǒ zuò fēijī qù Běijīng.", en: "I'm flying to Beijing." }] },
  "分": { def: "Minute; to divide; cent.", ex: [{ cn: "现在五点十分。", py: "Xiànzài wǔ diǎn shí fēn.", en: "It's 5:10 now." }] },
  "分钟": { def: "Minute (duration).", ex: [{ cn: "请等五分钟。", py: "Qǐng děng wǔ fēnzhōng.", en: "Please wait five minutes." }] },
  "高兴": { def: "Happy; glad.", ex: [{ cn: "见到你很高兴。", py: "Jiàn dào nǐ hěn gāoxìng.", en: "Nice to meet you." }] },
  "个": { def: "General measure word for people and objects.", ex: [{ cn: "我有一个朋友。", py: "Wǒ yǒu yí gè péngyou.", en: "I have a friend." }] },
  "歌": { def: "Song.", ex: [{ cn: "这首歌很好听。", py: "Zhè shǒu gē hěn hǎotīng.", en: "This song sounds great." }] },
  "哥哥": { def: "Older brother.", ex: [{ cn: "我哥哥很高。", py: "Wǒ gēge hěn gāo.", en: "My older brother is tall." }] },
  "给": { def: "To give; for; to.", ex: [{ cn: "请给我一杯水。", py: "Qǐng gěi wǒ yì bēi shuǐ.", en: "Please give me a cup of water." }] },
  "公司": { def: "Company; firm.", ex: [{ cn: "我在一家公司工作。", py: "Wǒ zài yì jiā gōngsī gōngzuò.", en: "I work at a company." }] },
  "工作": { def: "To work; job; work.", ex: [{ cn: "我的工作很忙。", py: "Wǒ de gōngzuò hěn máng.", en: "My job is very busy." }] },
  "狗": { def: "Dog.", ex: [{ cn: "我有一只狗。", py: "Wǒ yǒu yì zhī gǒu.", en: "I have a dog." }] },
  "贵": { def: "Expensive; honored.", ex: [{ cn: "这个太贵了。", py: "Zhège tài guì le.", en: "This is too expensive." }] },
  "国": { def: "Country; nation.", ex: [{ cn: "你是哪国人?", py: "Nǐ shì nǎ guó rén?", en: "What country are you from?" }] },
  "还": { def: "Still; also; in addition.", ex: [{ cn: "他还在睡觉。", py: "Tā hái zài shuìjiào.", en: "He is still sleeping." }] },
  "孩子": { def: "Child; kid.", ex: [{ cn: "她有两个孩子。", py: "Tā yǒu liǎng gè háizi.", en: "She has two children." }] },
  "汉语": { def: "Chinese (spoken language).", ex: [{ cn: "我学习汉语。", py: "Wǒ xuéxí Hànyǔ.", en: "I'm learning Chinese." }] },
  "汉字": { def: "Chinese character.", ex: [{ cn: "汉字很难写。", py: "Hànzì hěn nán xiě.", en: "Chinese characters are hard to write." }] },
  "号": { def: "Number; date (of month).", ex: [{ cn: "今天是几号?", py: "Jīntiān shì jǐ hào?", en: "What's today's date?" }] },
  "好": { def: "Good; well; OK.", ex: [{ cn: "你好吗?", py: "Nǐ hǎo ma?", en: "How are you?" }] },
  "好吃": { def: "Delicious; tasty.", ex: [{ cn: "妈妈做的菜很好吃。", py: "Māma zuò de cài hěn hǎochī.", en: "Mom's cooking is delicious." }] },
  "好看": { def: "Good-looking; nice-looking.", ex: [{ cn: "这本书很好看。", py: "Zhè běn shū hěn hǎokàn.", en: "This book is interesting." }] },
  "好听": { def: "Pleasant to hear; nice-sounding.", ex: [{ cn: "你的名字很好听。", py: "Nǐ de míngzi hěn hǎotīng.", en: "Your name sounds nice." }] },
  "好玩儿": { def: "Fun; amusing.", ex: [{ cn: "这个游戏很好玩儿。", py: "Zhège yóuxì hěn hǎowánr.", en: "This game is fun." }] },
  "和": { def: "And; with.", ex: [{ cn: "我和朋友去公园。", py: "Wǒ hé péngyou qù gōngyuán.", en: "I'm going to the park with my friend." }] },
  "喝": { def: "To drink.", ex: [{ cn: "你想喝什么?", py: "Nǐ xiǎng hē shénme?", en: "What would you like to drink?" }] },
  "很": { def: "Very (used before adjectives).", ex: [{ cn: "今天很冷。", py: "Jīntiān hěn lěng.", en: "It's very cold today." }] },
  "后": { def: "After; behind; back.", ex: [{ cn: "下课后我们去吃饭。", py: "Xiàkè hòu wǒmen qù chī fàn.", en: "Let's eat after class." }] },
  "回": { def: "To return; to go back.", ex: [{ cn: "我要回家了。", py: "Wǒ yào huí jiā le.", en: "I'm going home." }] },
  "会": { def: "Can; to know how to; will.", ex: [{ cn: "我会说一点儿汉语。", py: "Wǒ huì shuō yìdiǎnr Hànyǔ.", en: "I can speak a little Chinese." }] },
  "火车": { def: "Train.", ex: [{ cn: "我坐火车去上海。", py: "Wǒ zuò huǒchē qù Shànghǎi.", en: "I'm taking the train to Shanghai." }] },
  "几": { def: "How many; several (small number).", ex: [{ cn: "现在几点?", py: "Xiànzài jǐ diǎn?", en: "What time is it?" }] },
  "家": { def: "Home; family; measure word for businesses.", ex: [{ cn: "我家有四口人。", py: "Wǒ jiā yǒu sì kǒu rén.", en: "There are four people in my family." }] },
  "见": { def: "To see; to meet.", ex: [{ cn: "明天见!", py: "Míngtiān jiàn!", en: "See you tomorrow!" }] },
  "件": { def: "Measure word for clothing items and matters.", ex: [{ cn: "我买了一件衣服。", py: "Wǒ mǎi le yí jiàn yīfu.", en: "I bought a piece of clothing." }] },
  "叫": { def: "To be called; to call.", ex: [{ cn: "我叫小明。", py: "Wǒ jiào Xiǎo Míng.", en: "My name is Xiao Ming." }] },
  "饺子": { def: "Dumpling.", ex: [{ cn: "我们一起包饺子。", py: "Wǒmen yìqǐ bāo jiǎozi.", en: "Let's make dumplings together." }] },
  "家人": { def: "Family member.", ex: [{ cn: "我爱我的家人。", py: "Wǒ ài wǒ de jiārén.", en: "I love my family." }] },
  "鸡蛋": { def: "Chicken egg.", ex: [{ cn: "我早上吃一个鸡蛋。", py: "Wǒ zǎoshang chī yí gè jīdàn.", en: "I eat one egg in the morning." }] },
  "姐姐": { def: "Older sister.", ex: [{ cn: "我姐姐很漂亮。", py: "Wǒ jiějie hěn piàoliang.", en: "My older sister is beautiful." }] },
  "今年": { def: "This year.", ex: [{ cn: "今年我二十岁。", py: "Jīnnián wǒ èrshí suì.", en: "I'm twenty this year." }] },
  "今天": { def: "Today.", ex: [{ cn: "今天天气很好。", py: "Jīntiān tiānqì hěn hǎo.", en: "The weather is nice today." }] },
  "九": { def: "The number nine (9).", ex: [{ cn: "现在九点了。", py: "Xiànzài jiǔ diǎn le.", en: "It's nine o'clock." }] },
  "觉得": { def: "To feel; to think.", ex: [{ cn: "我觉得他很好。", py: "Wǒ juéde tā hěn hǎo.", en: "I think he's nice." }] },
  "开": { def: "To open; to turn on; to drive.", ex: [{ cn: "请开门。", py: "Qǐng kāi mén.", en: "Please open the door." }] },
  "开车": { def: "To drive (a car).", ex: [{ cn: "他会开车。", py: "Tā huì kāichē.", en: "He can drive." }] },
  "看": { def: "To look at; to watch; to read.", ex: [{ cn: "我喜欢看书。", py: "Wǒ xǐhuan kàn shū.", en: "I like to read books." }] },
  "看病": { def: "To see a doctor; to visit a patient.", ex: [{ cn: "我去医院看病。", py: "Wǒ qù yīyuàn kànbìng.", en: "I'm going to the hospital to see a doctor." }] },
  "看见": { def: "To see; to catch sight of.", ex: [{ cn: "我看见他了。", py: "Wǒ kànjiàn tā le.", en: "I saw him." }] },
  "课": { def: "Class; lesson; course.", ex: [{ cn: "今天有三节课。", py: "Jīntiān yǒu sān jié kè.", en: "There are three classes today." }] },
  "可以": { def: "Can; may; be permitted.", ex: [{ cn: "我可以进来吗?", py: "Wǒ kěyǐ jìnlái ma?", en: "May I come in?" }] },
  "口": { def: "Mouth; measure word for family members.", ex: [{ cn: "我家有五口人。", py: "Wǒ jiā yǒu wǔ kǒu rén.", en: "My family has five people." }] },
  "块": { def: "Measure word for yuan/pieces.", ex: [{ cn: "这个十块钱。", py: "Zhège shí kuài qián.", en: "This costs ten yuan." }] },
  "来": { def: "To come.", ex: [{ cn: "请来我家。", py: "Qǐng lái wǒ jiā.", en: "Please come to my home." }] },
  "老师": { def: "Teacher.", ex: [{ cn: "她是我的中文老师。", py: "Tā shì wǒ de Zhōngwén lǎoshī.", en: "She is my Chinese teacher." }] },
  "了": { def: "Aspect particle indicating completion or change of state.", ex: [{ cn: "我吃了。", py: "Wǒ chī le.", en: "I've eaten." }] },
  "冷": { def: "Cold.", ex: [{ cn: "冬天很冷。", py: "Dōngtiān hěn lěng.", en: "Winter is very cold." }] },
  "里": { def: "Inside; in.", ex: [{ cn: "书在包里。", py: "Shū zài bāo lǐ.", en: "The book is in the bag." }] },
  "两": { def: "Two (used with measure words).", ex: [{ cn: "我有两个哥哥。", py: "Wǒ yǒu liǎng gè gēge.", en: "I have two older brothers." }] },
  "零": { def: "Zero (0).", ex: [{ cn: "我的电话是零八九。", py: "Wǒ de diànhuà shì líng-bā-jiǔ.", en: "My phone starts with 089." }] },
  "六": { def: "The number six (6).", ex: [{ cn: "我六点起床。", py: "Wǒ liù diǎn qǐchuáng.", en: "I get up at six." }] },
  "吗": { def: "Question particle (yes/no questions).", ex: [{ cn: "你是学生吗?", py: "Nǐ shì xuésheng ma?", en: "Are you a student?" }] },
  "卖": { def: "To sell.", ex: [{ cn: "这家店卖水果。", py: "Zhè jiā diàn mài shuǐguǒ.", en: "This shop sells fruit." }] },
  "买": { def: "To buy.", ex: [{ cn: "我想买一本书。", py: "Wǒ xiǎng mǎi yì běn shū.", en: "I want to buy a book." }] },
  "妈妈": { def: "Mother; mom.", ex: [{ cn: "我妈妈很忙。", py: "Wǒ māma hěn máng.", en: "My mom is very busy." }] },
  "忙": { def: "Busy.", ex: [{ cn: "我今天很忙。", py: "Wǒ jīntiān hěn máng.", en: "I'm busy today." }] },
  "猫": { def: "Cat.", ex: [{ cn: "我家有一只猫。", py: "Wǒ jiā yǒu yì zhī māo.", en: "I have a cat at home." }] },
  "没关系": { def: "It doesn't matter; no problem.", ex: [{ cn: "—对不起!—没关系。", py: "—Duìbuqǐ! —Méi guānxi.", en: "—Sorry! —It's okay." }] },
  "妹妹": { def: "Younger sister.", ex: [{ cn: "我有一个妹妹。", py: "Wǒ yǒu yí gè mèimei.", en: "I have a younger sister." }] },
  "没事": { def: "It's nothing; no problem.", ex: [{ cn: "没事,别担心。", py: "Méishì, bié dānxīn.", en: "It's fine, don't worry." }] },
  "没有": { def: "Don't have; there isn't.", ex: [{ cn: "我没有钱。", py: "Wǒ méiyǒu qián.", en: "I don't have money." }] },
  "们": { def: "Plural suffix for pronouns and people.", ex: [{ cn: "学生们在上课。", py: "Xuéshengmen zài shàngkè.", en: "The students are in class." }] },
  "面包": { def: "Bread.", ex: [{ cn: "我早上吃面包。", py: "Wǒ zǎoshang chī miànbāo.", en: "I eat bread in the morning." }] },
  "面条儿": { def: "Noodles.", ex: [{ cn: "我喜欢吃面条儿。", py: "Wǒ xǐhuan chī miàntiáor.", en: "I like noodles." }] },
  "米饭": { def: "Cooked rice.", ex: [{ cn: "中国人喜欢吃米饭。", py: "Zhōngguó rén xǐhuan chī mǐfàn.", en: "Chinese people like to eat rice." }] },
  "明年": { def: "Next year.", ex: [{ cn: "明年我去中国。", py: "Míngnián wǒ qù Zhōngguó.", en: "Next year I'll go to China." }] },
  "明天": { def: "Tomorrow.", ex: [{ cn: "明天见!", py: "Míngtiān jiàn!", en: "See you tomorrow!" }] },
  "名字": { def: "Name.", ex: [{ cn: "你叫什么名字?", py: "Nǐ jiào shénme míngzi?", en: "What's your name?" }] },
  "那": { def: "That.", ex: [{ cn: "那是我的书。", py: "Nà shì wǒ de shū.", en: "That is my book." }] },
  "哪": { def: "Which.", ex: [{ cn: "你是哪国人?", py: "Nǐ shì nǎ guó rén?", en: "Which country are you from?" }] },
  "那边": { def: "Over there; that side.", ex: [{ cn: "他在那边。", py: "Tā zài nàbiān.", en: "He's over there." }] },
  "哪儿": { def: "Where.", ex: [{ cn: "你去哪儿?", py: "Nǐ qù nǎr?", en: "Where are you going?" }] },
  "那个": { def: "That; that one.", ex: [{ cn: "那个人是谁?", py: "Nàge rén shì shéi?", en: "Who is that person?" }] },
  "哪个": { def: "Which one.", ex: [{ cn: "你要哪个?", py: "Nǐ yào nǎge?", en: "Which one do you want?" }] },
  "那里": { def: "There.", ex: [{ cn: "我去过那里。", py: "Wǒ qù guo nàlǐ.", en: "I've been there." }] },
  "哪里": { def: "Where.", ex: [{ cn: "你住在哪里?", py: "Nǐ zhù zài nǎlǐ?", en: "Where do you live?" }] },
  "男": { def: "Male.", ex: [{ cn: "他是男的。", py: "Tā shì nán de.", en: "He is male." }] },
  "男朋友": { def: "Boyfriend.", ex: [{ cn: "她有男朋友了。", py: "Tā yǒu nánpéngyou le.", en: "She has a boyfriend now." }] },
  "那儿": { def: "There; that place.", ex: [{ cn: "你的书在那儿。", py: "Nǐ de shū zài nàr.", en: "Your book is over there." }] },
  "那些": { def: "Those.", ex: [{ cn: "那些是什么?", py: "Nàxiē shì shénme?", en: "What are those?" }] },
  "哪些": { def: "Which ones.", ex: [{ cn: "你喜欢哪些?", py: "Nǐ xǐhuan nǎxiē?", en: "Which ones do you like?" }] },
  "呢": { def: "Particle for ongoing action or follow-up questions.", ex: [{ cn: "你呢?", py: "Nǐ ne?", en: "And you?" }] },
  "能": { def: "Can; to be able to.", ex: [{ cn: "你能帮我吗?", py: "Nǐ néng bāng wǒ ma?", en: "Can you help me?" }] },
  "你": { def: "You (singular).", ex: [{ cn: "你好!", py: "Nǐ hǎo!", en: "Hello!" }] },
  "年": { def: "Year.", ex: [{ cn: "今年是二零二六年。", py: "Jīnnián shì èr líng èr liù nián.", en: "This year is 2026." }] },
  "你好": { def: "Hello; hi.", ex: [{ cn: "你好,我是小李。", py: "Nǐ hǎo, wǒ shì Xiǎo Lǐ.", en: "Hi, I'm Xiao Li." }] },
  "你们": { def: "You (plural).", ex: [{ cn: "你们好!", py: "Nǐmen hǎo!", en: "Hello everyone (to you all)!" }] },
  "您": { def: "You (polite/formal).", ex: [{ cn: "您好,老师。", py: "Nín hǎo, lǎoshī.", en: "Hello, teacher." }] },
  "牛奶": { def: "Milk.", ex: [{ cn: "我每天喝牛奶。", py: "Wǒ měi tiān hē niúnǎi.", en: "I drink milk every day." }] },
  "女": { def: "Female.", ex: [{ cn: "她是女老师。", py: "Tā shì nǚ lǎoshī.", en: "She is a female teacher." }] },
  "女儿": { def: "Daughter.", ex: [{ cn: "她的女儿很可爱。", py: "Tā de nǚ'ér hěn kě'ài.", en: "Her daughter is very cute." }] },
  "女朋友": { def: "Girlfriend.", ex: [{ cn: "这是我的女朋友。", py: "Zhè shì wǒ de nǚpéngyou.", en: "This is my girlfriend." }] },
  "女士": { def: "Lady; Ms.; Madam.", ex: [{ cn: "李女士在吗?", py: "Lǐ nǚshì zài ma?", en: "Is Ms. Li here?" }] },
  "朋友": { def: "Friend.", ex: [{ cn: "他是我的好朋友。", py: "Tā shì wǒ de hǎo péngyou.", en: "He is my good friend." }] },
  "便宜": { def: "Cheap; inexpensive.", ex: [{ cn: "这个很便宜。", py: "Zhège hěn piányi.", en: "This is cheap." }] },
  "漂亮": { def: "Beautiful; pretty.", ex: [{ cn: "她很漂亮。", py: "Tā hěn piàoliang.", en: "She is beautiful." }] },
  "苹果": { def: "Apple.", ex: [{ cn: "我每天吃一个苹果。", py: "Wǒ měi tiān chī yí gè píngguǒ.", en: "I eat an apple every day." }] },
  "七": { def: "The number seven (7).", ex: [{ cn: "一个星期有七天。", py: "Yí gè xīngqī yǒu qī tiān.", en: "There are seven days in a week." }] },
  "前": { def: "Front; before; ago.", ex: [{ cn: "三年前我去了北京。", py: "Sān nián qián wǒ qù le Běijīng.", en: "I went to Beijing three years ago." }] },
  "钱": { def: "Money.", ex: [{ cn: "我没有钱。", py: "Wǒ méiyǒu qián.", en: "I don't have money." }] },
  "千": { def: "Thousand.", ex: [{ cn: "这个三千块。", py: "Zhège sān qiān kuài.", en: "This costs three thousand yuan." }] },
  "起床": { def: "To get up; to get out of bed.", ex: [{ cn: "我每天七点起床。", py: "Wǒ měi tiān qī diǎn qǐchuáng.", en: "I get up at seven every day." }] },
  "请": { def: "Please; to invite; to ask.", ex: [{ cn: "请坐。", py: "Qǐng zuò.", en: "Please sit down." }] },
  "请问": { def: "Excuse me; may I ask.", ex: [{ cn: "请问,洗手间在哪儿?", py: "Qǐngwèn, xǐshǒujiān zài nǎr?", en: "Excuse me, where's the bathroom?" }] },
  "去": { def: "To go.", ex: [{ cn: "我去学校。", py: "Wǒ qù xuéxiào.", en: "I'm going to school." }] },
  "去年": { def: "Last year.", ex: [{ cn: "去年我去了日本。", py: "Qùnián wǒ qù le Rìběn.", en: "Last year I went to Japan." }] },
  "热": { def: "Hot.", ex: [{ cn: "夏天很热。", py: "Xiàtiān hěn rè.", en: "Summer is very hot." }] },
  "人": { def: "Person; people.", ex: [{ cn: "他是好人。", py: "Tā shì hǎo rén.", en: "He's a good person." }] },
  "认识": { def: "To know; to recognize; to be acquainted with.", ex: [{ cn: "认识你很高兴。", py: "Rènshi nǐ hěn gāoxìng.", en: "Nice to meet you." }] },
  "日": { def: "Day; sun.", ex: [{ cn: "今天是几月几日?", py: "Jīntiān shì jǐ yuè jǐ rì?", en: "What's today's date?" }] },
  "三": { def: "The number three (3).", ex: [{ cn: "我有三个朋友。", py: "Wǒ yǒu sān gè péngyou.", en: "I have three friends." }] },
  "上": { def: "Up; on; previous; to go up.", ex: [{ cn: "书在桌子上。", py: "Shū zài zhuōzi shàng.", en: "The book is on the table." }] },
  "上班": { def: "To go to work.", ex: [{ cn: "我九点上班。", py: "Wǒ jiǔ diǎn shàngbān.", en: "I start work at nine." }] },
  "商店": { def: "Store; shop.", ex: [{ cn: "商店关门了。", py: "Shāngdiàn guān mén le.", en: "The store is closed." }] },
  "上课": { def: "To attend class; to teach a class.", ex: [{ cn: "我们八点上课。", py: "Wǒmen bā diǎn shàngkè.", en: "Class starts at eight." }] },
  "上午": { def: "Morning (late); A.M.", ex: [{ cn: "上午我有课。", py: "Shàngwǔ wǒ yǒu kè.", en: "I have class in the morning." }] },
  "上学": { def: "To go to school; to attend school.", ex: [{ cn: "孩子们去上学。", py: "Háizimen qù shàngxué.", en: "The children are going to school." }] },
  "少": { def: "Few; little.", ex: [{ cn: "今天人很少。", py: "Jīntiān rén hěn shǎo.", en: "There are few people today." }] },
  "谁": { def: "Who.", ex: [{ cn: "他是谁?", py: "Tā shì shéi?", en: "Who is he?" }] },
  "生病": { def: "To get sick; to fall ill.", ex: [{ cn: "他生病了。", py: "Tā shēngbìng le.", en: "He got sick." }] },
  "什么": { def: "What.", ex: [{ cn: "你做什么?", py: "Nǐ zuò shénme?", en: "What are you doing?" }] },
  "十": { def: "The number ten (10).", ex: [{ cn: "我十岁。", py: "Wǒ shí suì.", en: "I'm ten years old." }] },
  "是": { def: "To be (am, is, are).", ex: [{ cn: "我是学生。", py: "Wǒ shì xuésheng.", en: "I am a student." }] },
  "事": { def: "Matter; affair; thing.", ex: [{ cn: "我有一件事告诉你。", py: "Wǒ yǒu yí jiàn shì gàosu nǐ.", en: "I have something to tell you." }] },
  "时候": { def: "Time; moment; when.", ex: [{ cn: "什么时候吃饭?", py: "Shénme shíhou chī fàn?", en: "When do we eat?" }] },
  "时间": { def: "Time (duration).", ex: [{ cn: "我没有时间。", py: "Wǒ méiyǒu shíjiān.", en: "I don't have time." }] },
  "手机": { def: "Mobile phone; cell phone.", ex: [{ cn: "我的手机不见了。", py: "Wǒ de shǒujī bú jiàn le.", en: "My phone is missing." }] },
  "书": { def: "Book.", ex: [{ cn: "这本书很有意思。", py: "Zhè běn shū hěn yǒu yìsi.", en: "This book is interesting." }] },
  "书店": { def: "Bookstore.", ex: [{ cn: "书店在哪儿?", py: "Shūdiàn zài nǎr?", en: "Where's the bookstore?" }] },
  "睡": { def: "To sleep.", ex: [{ cn: "我想睡了。", py: "Wǒ xiǎng shuì le.", en: "I want to sleep." }] },
  "水": { def: "Water.", ex: [{ cn: "我想喝水。", py: "Wǒ xiǎng hē shuǐ.", en: "I want to drink water." }] },
  "水果": { def: "Fruit.", ex: [{ cn: "我喜欢吃水果。", py: "Wǒ xǐhuan chī shuǐguǒ.", en: "I like to eat fruit." }] },
  "睡觉": { def: "To sleep; to go to bed.", ex: [{ cn: "我十点睡觉。", py: "Wǒ shí diǎn shuìjiào.", en: "I go to bed at ten." }] },
  "说": { def: "To speak; to say.", ex: [{ cn: "请说慢一点儿。", py: "Qǐng shuō màn yìdiǎnr.", en: "Please speak more slowly." }] },
  "说话": { def: "To speak; to talk.", ex: [{ cn: "他不喜欢说话。", py: "Tā bù xǐhuan shuōhuà.", en: "He doesn't like to talk." }] },
  "四": { def: "The number four (4).", ex: [{ cn: "我家有四口人。", py: "Wǒ jiā yǒu sì kǒu rén.", en: "There are four people in my family." }] },
  "岁": { def: "Years old (of age).", ex: [{ cn: "你今年多大岁数?", py: "Nǐ jīnnián duō dà suìshù?", en: "How old are you this year?" }] },
  "他": { def: "He; him.", ex: [{ cn: "他是我朋友。", py: "Tā shì wǒ péngyou.", en: "He is my friend." }] },
  "它": { def: "It (for animals, objects).", ex: [{ cn: "它是一只小猫。", py: "Tā shì yì zhī xiǎo māo.", en: "It is a little cat." }] },
  "她": { def: "She; her.", ex: [{ cn: "她是我妈妈。", py: "Tā shì wǒ māma.", en: "She is my mom." }] },
  "太": { def: "Too; extremely.", ex: [{ cn: "今天太热了。", py: "Jīntiān tài rè le.", en: "It's too hot today." }] },
  "她们": { def: "They (female).", ex: [{ cn: "她们是好朋友。", py: "Tāmen shì hǎo péngyou.", en: "They are good friends." }] },
  "它们": { def: "They (animals/objects).", ex: [{ cn: "它们都是我的猫。", py: "Tāmen dōu shì wǒ de māo.", en: "They are all my cats." }] },
  "他们": { def: "They; them.", ex: [{ cn: "他们在哪儿?", py: "Tāmen zài nǎr?", en: "Where are they?" }] },
  "天": { def: "Day; sky.", ex: [{ cn: "今天是星期一。", py: "Jīntiān shì xīngqīyī.", en: "Today is Monday." }] },
  "天气": { def: "Weather.", ex: [{ cn: "今天天气怎么样?", py: "Jīntiān tiānqì zěnmeyàng?", en: "How's the weather today?" }] },
  "听": { def: "To listen.", ex: [{ cn: "我喜欢听音乐。", py: "Wǒ xǐhuan tīng yīnyuè.", en: "I like to listen to music." }] },
  "听见": { def: "To hear.", ex: [{ cn: "你听见了吗?", py: "Nǐ tīngjiàn le ma?", en: "Did you hear that?" }] },
  "同学": { def: "Classmate.", ex: [{ cn: "他是我的同学。", py: "Tā shì wǒ de tóngxué.", en: "He is my classmate." }] },
  "外": { def: "Outside.", ex: [{ cn: "外面下雨了。", py: "Wàimiàn xià yǔ le.", en: "It's raining outside." }] },
  "外边": { def: "Outside.", ex: [{ cn: "他在外边等你。", py: "Tā zài wàibiān děng nǐ.", en: "He's waiting outside for you." }] },
  "玩": { def: "To play; to have fun.", ex: [{ cn: "孩子们在公园玩。", py: "Háizimen zài gōngyuán wán.", en: "The kids are playing at the park." }] },
  "晚": { def: "Late.", ex: [{ cn: "你来晚了。", py: "Nǐ lái wǎn le.", en: "You came late." }] },
  "晚饭": { def: "Dinner; evening meal.", ex: [{ cn: "晚饭吃什么?", py: "Wǎnfàn chī shénme?", en: "What's for dinner?" }] },
  "晚上": { def: "Evening; at night.", ex: [{ cn: "晚上见。", py: "Wǎnshang jiàn.", en: "See you in the evening." }] },
  "喂": { def: "Hello (on the phone); hey.", ex: [{ cn: "喂,你好。", py: "Wéi, nǐ hǎo.", en: "Hello (on phone)." }] },
  "问": { def: "To ask.", ex: [{ cn: "我想问你一个问题。", py: "Wǒ xiǎng wèn nǐ yí gè wèntí.", en: "I want to ask you a question." }] },
  "问题": { def: "Question; problem.", ex: [{ cn: "我有一个问题。", py: "Wǒ yǒu yí gè wèntí.", en: "I have a question." }] },
  "我": { def: "I; me.", ex: [{ cn: "我是中国人。", py: "Wǒ shì Zhōngguó rén.", en: "I am Chinese." }] },
  "我们": { def: "We; us.", ex: [{ cn: "我们是朋友。", py: "Wǒmen shì péngyou.", en: "We are friends." }] },
  "五": { def: "The number five (5).", ex: [{ cn: "我有五本书。", py: "Wǒ yǒu wǔ běn shū.", en: "I have five books." }] },
  "午饭": { def: "Lunch.", ex: [{ cn: "我们一起吃午饭吧。", py: "Wǒmen yìqǐ chī wǔfàn ba.", en: "Let's have lunch together." }] },
  "下": { def: "Down; below; next; to get off.", ex: [{ cn: "请下车。", py: "Qǐng xià chē.", en: "Please get off the car." }] },
  "下班": { def: "To get off work.", ex: [{ cn: "我五点下班。", py: "Wǒ wǔ diǎn xiàbān.", en: "I get off work at five." }] },
  "下课": { def: "Class is over; to finish class.", ex: [{ cn: "我们下课了。", py: "Wǒmen xiàkè le.", en: "Class is over." }] },
  "想": { def: "To want; to think; to miss.", ex: [{ cn: "我想去中国。", py: "Wǒ xiǎng qù Zhōngguó.", en: "I want to go to China." }] },
  "先生": { def: "Mister; sir; husband.", ex: [{ cn: "王先生,您好。", py: "Wáng xiānsheng, nín hǎo.", en: "Hello, Mr. Wang." }] },
  "现在": { def: "Now; at present.", ex: [{ cn: "现在几点了?", py: "Xiànzài jǐ diǎn le?", en: "What time is it now?" }] },
  "小": { def: "Small; little.", ex: [{ cn: "这只猫很小。", py: "Zhè zhī māo hěn xiǎo.", en: "This cat is small." }] },
  "小朋友": { def: "Child; little friend.", ex: [{ cn: "小朋友们,你们好!", py: "Xiǎopéngyoumen, nǐmen hǎo!", en: "Hello, children!" }] },
  "小时": { def: "Hour.", ex: [{ cn: "我学了两个小时。", py: "Wǒ xué le liǎng gè xiǎoshí.", en: "I studied for two hours." }] },
  "小学": { def: "Primary school; elementary school.", ex: [{ cn: "她在小学教书。", py: "Tā zài xiǎoxué jiāoshū.", en: "She teaches at a primary school." }] },
  "小学生": { def: "Primary school student.", ex: [{ cn: "我弟弟是小学生。", py: "Wǒ dìdi shì xiǎoxuéshēng.", en: "My younger brother is in primary school." }] },
  "下午": { def: "Afternoon.", ex: [{ cn: "下午我有课。", py: "Xiàwǔ wǒ yǒu kè.", en: "I have class in the afternoon." }] },
  "下雨": { def: "To rain.", ex: [{ cn: "外面下雨了。", py: "Wàimiàn xià yǔ le.", en: "It's raining outside." }] },
  "写": { def: "To write.", ex: [{ cn: "请写你的名字。", py: "Qǐng xiě nǐ de míngzi.", en: "Please write your name." }] },
  "些": { def: "Some; a few (after this/that).", ex: [{ cn: "我买了一些水果。", py: "Wǒ mǎi le yìxiē shuǐguǒ.", en: "I bought some fruit." }] },
  "谢谢": { def: "Thank you; thanks.", ex: [{ cn: "谢谢你的帮助。", py: "Xièxie nǐ de bāngzhù.", en: "Thanks for your help." }] },
  "喜欢": { def: "To like.", ex: [{ cn: "我喜欢学汉语。", py: "Wǒ xǐhuan xué Hànyǔ.", en: "I like to study Chinese." }] },
  "新": { def: "New.", ex: [{ cn: "这是我的新手机。", py: "Zhè shì wǒ de xīn shǒujī.", en: "This is my new phone." }] },
  "星期": { def: "Week.", ex: [{ cn: "一个星期有七天。", py: "Yí gè xīngqī yǒu qī tiān.", en: "A week has seven days." }] },
  "星期日": { def: "Sunday.", ex: [{ cn: "星期日我休息。", py: "Xīngqīrì wǒ xiūxi.", en: "I rest on Sunday." }] },
  "星期天": { def: "Sunday (colloquial).", ex: [{ cn: "星期天见!", py: "Xīngqītiān jiàn!", en: "See you on Sunday!" }] },
  "休息": { def: "To rest; to take a break.", ex: [{ cn: "你应该休息一下。", py: "Nǐ yīnggāi xiūxi yíxià.", en: "You should rest a bit." }] },
  "学": { def: "To study; to learn.", ex: [{ cn: "我学汉语。", py: "Wǒ xué Hànyǔ.", en: "I study Chinese." }] },
  "雪": { def: "Snow.", ex: [{ cn: "外面下雪了。", py: "Wàimiàn xià xuě le.", en: "It's snowing outside." }] },
  "学生": { def: "Student.", ex: [{ cn: "我是大学学生。", py: "Wǒ shì dàxué xuésheng.", en: "I am a university student." }] },
  "学习": { def: "To study; learning.", ex: [{ cn: "学习汉语很有意思。", py: "Xuéxí Hànyǔ hěn yǒu yìsi.", en: "Studying Chinese is interesting." }] },
  "学校": { def: "School.", ex: [{ cn: "学校在哪儿?", py: "Xuéxiào zài nǎr?", en: "Where is the school?" }] },
  "要": { def: "To want; to need; will; should.", ex: [{ cn: "我要一杯茶。", py: "Wǒ yào yì bēi chá.", en: "I want a cup of tea." }] },
  "也": { def: "Also; too; as well.", ex: [{ cn: "我也是学生。", py: "Wǒ yě shì xuésheng.", en: "I'm a student too." }] },
  "一": { def: "The number one (1); a/an.", ex: [{ cn: "我有一个哥哥。", py: "Wǒ yǒu yí gè gēge.", en: "I have one older brother." }] },
  "一半": { def: "Half; one half.", ex: [{ cn: "我吃了一半。", py: "Wǒ chī le yíbàn.", en: "I ate half." }] },
  "一点儿": { def: "A little; a bit.", ex: [{ cn: "我会一点儿汉语。", py: "Wǒ huì yìdiǎnr Hànyǔ.", en: "I can speak a little Chinese." }] },
  "衣服": { def: "Clothes; clothing.", ex: [{ cn: "我买了新衣服。", py: "Wǒ mǎi le xīn yīfu.", en: "I bought new clothes." }] },
  "医生": { def: "Doctor.", ex: [{ cn: "我妈妈是医生。", py: "Wǒ māma shì yīshēng.", en: "My mom is a doctor." }] },
  "一下": { def: "Briefly; (verb) a bit.", ex: [{ cn: "请等一下。", py: "Qǐng děng yíxià.", en: "Please wait a moment." }] },
  "一些": { def: "Some; a few.", ex: [{ cn: "我有一些问题。", py: "Wǒ yǒu yìxiē wèntí.", en: "I have some questions." }] },
  "医院": { def: "Hospital.", ex: [{ cn: "医院离这里很近。", py: "Yīyuàn lí zhèlǐ hěn jìn.", en: "The hospital is close to here." }] },
  "椅子": { def: "Chair.", ex: [{ cn: "这把椅子很舒服。", py: "Zhè bǎ yǐzi hěn shūfu.", en: "This chair is comfortable." }] },
  "有": { def: "To have; there is/are.", ex: [{ cn: "我有一本书。", py: "Wǒ yǒu yì běn shū.", en: "I have a book." }] },
  "有的": { def: "Some; some of.", ex: [{ cn: "有的人喜欢茶。", py: "Yǒude rén xǐhuan chá.", en: "Some people like tea." }] },
  "有点儿": { def: "A little; somewhat (usually negative).", ex: [{ cn: "我有点儿累。", py: "Wǒ yǒudiǎnr lèi.", en: "I'm a little tired." }] },
  "有些": { def: "Some.", ex: [{ cn: "有些事我不知道。", py: "Yǒuxiē shì wǒ bù zhīdào.", en: "There are some things I don't know." }] },
  "雨": { def: "Rain.", ex: [{ cn: "雨很大。", py: "Yǔ hěn dà.", en: "The rain is heavy." }] },
  "元": { def: "Yuan (Chinese currency unit).", ex: [{ cn: "这个一百元。", py: "Zhège yìbǎi yuán.", en: "This is one hundred yuan." }] },
  "月": { def: "Month; moon.", ex: [{ cn: "这个月很忙。", py: "Zhège yuè hěn máng.", en: "This month is busy." }] },
  "在": { def: "At; in; on; to be located.", ex: [{ cn: "我在家。", py: "Wǒ zài jiā.", en: "I'm at home." }] },
  "再": { def: "Again; once more.", ex: [{ cn: "请再说一次。", py: "Qǐng zài shuō yí cì.", en: "Please say it again." }] },
  "再见": { def: "Goodbye; see you again.", ex: [{ cn: "再见,明天见!", py: "Zàijiàn, míngtiān jiàn!", en: "Goodbye, see you tomorrow!" }] },
  "早": { def: "Early; morning.", ex: [{ cn: "早!", py: "Zǎo!", en: "Good morning!" }] },
  "早饭": { def: "Breakfast.", ex: [{ cn: "你吃早饭了吗?", py: "Nǐ chī zǎofàn le ma?", en: "Have you had breakfast?" }] },
  "早上": { def: "Early morning.", ex: [{ cn: "早上好!", py: "Zǎoshang hǎo!", en: "Good morning!" }] },
  "怎么": { def: "How; why.", ex: [{ cn: "这个怎么说?", py: "Zhège zěnme shuō?", en: "How do you say this?" }] },
  "怎么样": { def: "How about it?; how is it?", ex: [{ cn: "你今天怎么样?", py: "Nǐ jīntiān zěnmeyàng?", en: "How are you today?" }] },
  "找": { def: "To look for; to find.", ex: [{ cn: "我在找我的书。", py: "Wǒ zài zhǎo wǒ de shū.", en: "I'm looking for my book." }] },
  "这": { def: "This.", ex: [{ cn: "这是什么?", py: "Zhè shì shénme?", en: "What is this?" }] },
  "这边": { def: "This side; over here.", ex: [{ cn: "请到这边来。", py: "Qǐng dào zhèbiān lái.", en: "Please come over here." }] },
  "这个": { def: "This; this one.", ex: [{ cn: "这个多少钱?", py: "Zhège duōshǎo qián?", en: "How much is this?" }] },
  "这里": { def: "Here; this place.", ex: [{ cn: "我在这里。", py: "Wǒ zài zhèlǐ.", en: "I'm here." }] },
  "真": { def: "Really; true.", ex: [{ cn: "这真好吃!", py: "Zhè zhēn hǎochī!", en: "This is really delicious!" }] },
  "正在": { def: "In the process of (doing).", ex: [{ cn: "我正在吃饭。", py: "Wǒ zhèngzài chī fàn.", en: "I'm eating right now." }] },
  "这儿": { def: "Here.", ex: [{ cn: "请到这儿来。", py: "Qǐng dào zhèr lái.", en: "Please come here." }] },
  "这些": { def: "These.", ex: [{ cn: "这些是我的书。", py: "Zhèxiē shì wǒ de shū.", en: "These are my books." }] },
  "只": { def: "Only; just; measure word (animals).", ex: [{ cn: "我只有一个。", py: "Wǒ zhǐ yǒu yí gè.", en: "I only have one." }] },
  "知道": { def: "To know (a fact).", ex: [{ cn: "我不知道。", py: "Wǒ bù zhīdào.", en: "I don't know." }] },
  "中国": { def: "China.", ex: [{ cn: "我去中国旅游。", py: "Wǒ qù Zhōngguó lǚyóu.", en: "I'm going to China to travel." }] },
  "中文": { def: "Chinese (language, esp. written).", ex: [{ cn: "我会写中文。", py: "Wǒ huì xiě Zhōngwén.", en: "I can write Chinese." }] },
  "中午": { def: "Noon; midday.", ex: [{ cn: "中午我们吃饭。", py: "Zhōngwǔ wǒmen chī fàn.", en: "We eat at noon." }] },
  "中学": { def: "Middle school; secondary school.", ex: [{ cn: "我在中学读书。", py: "Wǒ zài zhōngxué dúshū.", en: "I study in middle school." }] },
  "中学生": { def: "Middle school student.", ex: [{ cn: "他是中学生。", py: "Tā shì zhōngxuéshēng.", en: "He is a middle school student." }] },
  "住": { def: "To live; to reside.", ex: [{ cn: "我住在北京。", py: "Wǒ zhù zài Běijīng.", en: "I live in Beijing." }] },
  "桌子": { def: "Table; desk.", ex: [{ cn: "书在桌子上。", py: "Shū zài zhuōzi shàng.", en: "The book is on the table." }] },
  "字": { def: "Character; word.", ex: [{ cn: "这个字怎么读?", py: "Zhège zì zěnme dú?", en: "How do you read this character?" }] },
  "坐": { def: "To sit; to take (transport).", ex: [{ cn: "请坐。", py: "Qǐng zuò.", en: "Please sit down." }] },
  "做": { def: "To do; to make.", ex: [{ cn: "你在做什么?", py: "Nǐ zài zuò shénme?", en: "What are you doing?" }] },
  "做饭": { def: "To cook; to prepare a meal.", ex: [{ cn: "我妈妈在做饭。", py: "Wǒ māma zài zuòfàn.", en: "My mom is cooking." }] },
  "昨天": { def: "Yesterday.", ex: [{ cn: "昨天我去了商店。", py: "Zuótiān wǒ qù le shāngdiàn.", en: "Yesterday I went to the store." }] }
};

// Helper: flat list of all unique words (deduplicated by hanzi)
const allWords = (() => {
  const seen = new Set();
  const list = [];
  for (const cat of categories) {
    for (const w of cat.words) {
      if (!seen.has(w.hanzi)) {
        seen.add(w.hanzi);
        list.push({ ...w, category: cat.id });
      }
    }
  }
  return list;
})();