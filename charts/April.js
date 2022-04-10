// https://echarts.apache.org/examples/zh/editor.html?c=line-stack

option = {
  title: {
    text: '上海 4月新增新冠阳性数量'
  },
  // 全局调色盘。
  color: [
    '#c23531',
    '#bda29a',
    '#61a0a8'
  ],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['总计', '确诊', '无症状']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '确诊',
      type: 'line',
      // stack: 'Total',
      data: [260, 438, 425, 268, 311, 322, 824, 1015, 1006]
    },
    {
      name: '无症状',
      type: 'line',
      // stack: 'Total',
      data: [6051, 7788, 8581, 13086, 16766, 19660, 20398, 22609, 23937]
    },
    {
      name: '总计',
      type: 'line',
      // stack: 'Total',
      data: [6311, 8226, 9006, 13354, 17077, 19982, 21222, 23624, 24943]
    }
  ]
};