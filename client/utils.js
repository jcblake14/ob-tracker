import theme from './theme'


// DASHBOARD.JS
export function filterByRange(deliveries, range){
  if (range.start) deliveries = deliveries.filter(d => {
    return new Date(d.date) >= range.start;
  })
  if (range.end) deliveries = deliveries.filter(d => {
    return new Date(d.date) <= range.end;
  })
  return deliveries;
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

  // no sort for the moment, in order to maintain chart colors
  // columns = columns.sort((a, b) => b[1] - a[1])

  return columns;
}

const colors = [theme.color1, theme.color2, theme.color3, '#FF6B6B', '#FFE66D', '#36A2EB', '#5D576B', '#FFFAE3', '#1A535C'];

export function buildColors(columns){
  const colorsObject = {}
  columns.forEach((c, i) => {
    colorsObject[c[0]] = colors[i]
  });
  return colorsObject;
}



// FORM.JS
export function validate(data) {
  let validations = {
    all: true,
    date: !!data.date,
    patient_age: data.patient_age !== '' && !isNaN(Number(data.patient_age)) && data.patient_age < 100,
    gravidity: data.gravidity !== '' && !isNaN(Number(data.gravidity)) && data.gravidity < 30,
    parity: data.parity !== '' && !isNaN(Number(data.parity)) && data.parity < 30 && data.parity <= data.gravidity,
    bmi: data.bmi !== '' && !isNaN(Number(data.bmi)) && data.bmi < 50,
    weeks: data.weeks !== '' && !isNaN(Number(data.weeks)) && data.weeks < 70,
    days: data.days !== '' && !isNaN(Number(data.days)) && data.days < 7,
    type: !!data.type,
    indication: data.type !== 'C-section' || data.indication !== '',
    induced: !!data.induced,
    induction_reason: data.induced !== 'Yes' || data.induction_reason !== ''
  }

  for (let key in validations){
    if (validations[key] === false) validations.all = false;
  }

  return validations;
}

export const form = {
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
    'Natural',
    'Operative',
    'C-section'
  ]
}