import maisa from 'maisa-usere';
import todocel from 'todocel';

const sliceSampleData = (array, maxLength = 50) => {
  const iStart = getRandomInteger(0, array.length - maxLength)
  const iEnd = iStart + getRandomInteger(3, maxLength)
  return array.slice(iStart, iEnd)
}

const getEmptyData = () => {
  return {
    chartConfig: {
      title: '',
      axisLabels: ['', ''],
      itemValues: addColoursToConfig([{ name: '' }]),
      doTrim: true,
    },
    chartData: [{ itemLabel: '', itemValues: [0] }],
  }
}

const addColoursToConfig = (itemValues) => {
  return itemValues.map((value) => {
    value.color ??= getRandomColor().formatHex()
    return value
  })
}

const getRandomData = (
  length = getRandomInteger(3, 10),
  groupSize = getRandomInteger(3, 5)
) => {
  const rangeLow = getRandomInteger(1, 50)
  const rangeHigh = getRandomInteger(rangeLow, 200)
  return {
    chartConfig: {
      title: 'Random Chart Data',
      axisLabels: ['Y Axis', 'X Axis'],
      itemValues: addColoursToConfig(
        arr<ConfigItemValue>(groupSize, (i) => ({
          name: `Type ${groupSize - i}`,
        }))
      ),
      doTrim: true,
    },
    chartData: arr<DataItem>(length, (i) => ({
      itemLabel: `Item ${length - i}`,
      itemValues: arr<number>(groupSize, () =>
        getRandomInteger(rangeLow, rangeHigh)
      ),
    })),
  }
}