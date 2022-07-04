const sideBar = [
  {
    type: 'doc',
    label: '社会',
    id: 'society/readme',
  },
  {
    type: 'doc',
    label: '经济',
    id: 'society/economy/readme',
  },
  {
    type: 'category',
    label: '历史',
    items: [
      {
        type: 'doc',
        label: '介绍',
        id: 'society/history/readme',
      },
      {
        type: 'category',
        label: '牛人',
        items: [
          {
            type: 'doc',
            label: '王守仁(阳明)',
            id: 'society/history/people/wangyangming',
          },
          {
            type: 'doc',
            label: '曾国藩',
            id: 'society/history/people/zengguofan',
          },
        ]
      },
    ]
  },
  {
    type: 'category',
    label: '段子',
    items: [
      {
        type: 'doc',
        label: '介绍',
        id: 'society/funny/readme',
      },
    ]
  }
]

module.exports = sideBar