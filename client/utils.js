// DASHBOARD.JS

export function filterByRange(deliveries, range){
  if (range.start) deliveries = deliveries.filter(d => {
    return new Date(d.date) >= range.start;
  })
  if (range.end) deliveries = deliveries.filter(d => {
    return new Date(d.date) <= range.end;
  })
  return deliveries
}

export function buildChartData(deliveries, segment){
  return deliveries.map(d => d[segment]).filter(el => !!el);
}

// CHART.JS
export function buildColumns(segment){
  let cache = {}, columns = [];
  for (var i = 0; i < segment.length; i++){
    cache[segment[i]] = (cache[segment[i]] || 0) + 1}

  for (var key in cache){
    columns.push([key, cache[key]])}

  columns = columns.sort((a, b) => b[1] - a[1])

  return columns;
}

// FORM.JS

export const form = {
  testData: [
    'Barry',
    'Judith',
    'Rachel',
    'Jessica'
  ],
  indications: [
    'breech position',
    'failed induction',
    'elective',
    'repeat c-section',
    'non-reassuring fetal heart tracing',
    'abruption',
    'pregnancy-induced hypertensive disorder',
    'second stage arrest'
  ],
  inductions: [
    'gestational hypertension',
    'chronic hypertension',
    'pre-eclampsia',
    'sever pre-eclampsia',
    'cholestasis',
    'fetal anomalies',
    'intrauterine growth restriction',
    'abruption',
    'HELLP syndrome',
    'post dates',
    'advanced maternal age',
    'other'
  ],
  types: [
    'Vaginal',
    'Vaginal operative',
    'C-section'
  ]
}