const sideBar = [
  {
    type: 'doc',
    label: '自我',
    id: 'self/readme',
  },
  {
      type: 'category',
      label: '心智',
      items: [
        {
          type: 'doc',
          label: '幸福',
          id: 'self/mind/happiness',
        },
        {
          type: 'doc',
          label: '情商',
          id: 'self/mind/eq',
        },
        {
          type: 'category',
          label: '书',
          items: [
            {
              type: 'doc',
              label: '《稀缺: 我们是如何陷入贫穷与忙碌的》',
              id: 'self/mind/resource/scarcity'
            }
          ]
        },
      ]
  },
  {
    type: 'category',
    label: '健康',
    items: [
      {
        type: 'doc',
        label: '保持身体健康',
        id: 'self/health/physical/readme',
      },
      {
        type: 'doc',
        label: '保持心理健康',
        id: 'self/health/psychology/readme',
      },
    ]
  },
  {
    type: 'doc',
    label: '财富',
    id: 'self/wealth/readme',
  }
]

module.exports = sideBar