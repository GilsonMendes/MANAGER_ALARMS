import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData,
  Filler,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { Wrapper } from './charts.styled'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors } = DefaultTheme

interface LineType {
  dataGraf: number[]
  labels?: string[]
  title?: [
    display: boolean,
    text: string,
    color: string,
    align: 'start' | 'end' | 'center',
  ]
  dataLegend: string
  YLegend?: [display: boolean, color: string, step: number, complement: string]
  YBorder?: [display: boolean, color: string]
  YGrid?: [display: boolean, color: string]
  XLegend?: [
    display: boolean,
    color: string,
    align: 'center' | 'end' | 'inner' | 'start',
  ]
  XBorder?: [display: boolean, color: string]
  XGrid?: [display: boolean, color: string]
  tensionLine?: number
  grafLegend?: [
    display: boolean,
    align: 'top' | 'bottom' | 'center' | 'chartArea' | 'left' | 'right',
  ]
  background?: [display: boolean, color: string]
  color: string
  XBeginZero?: boolean
  YBeginZero?: boolean
  lineWidth?: number
  borderDashed?: [number]
  borderWidthLine?: number
  pointRad?: number
  pointStyled?:
    | 'circle'
    | 'cross'
    | 'crossRot'
    | 'dash'
    | 'line'
    | 'rect'
    | 'rectRounded'
    | 'rectRot'
    | 'star'
    | 'triangle'
    | false
    | HTMLImageElement
    | HTMLCanvasElement
}

export function LineChart({
  dataGraf,
  labels = new Array(dataGraf.length).fill(''),
  title = [false, '', '', 'start'],
  dataLegend,
  YLegend = [false, colors.gray7, 1, ' '],
  YBorder = [false, ''],
  XBorder = [false, ''],
  tensionLine = 0,
  YGrid = [false, ''],
  XGrid = [false, ''],
  XLegend = [true, colors.gray7, 'inner'],
  grafLegend = [false, 'bottom'],
  background = [false, ''],
  XBeginZero = false,
  YBeginZero = false,
  pointStyled = 'circle',
  borderWidthLine = 3,
  borderDashed,
  pointRad = 3.5,
  color,
}: LineType) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Legend,
  )

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        beginAtZero: XBeginZero,
        grid: {
          display: XGrid[0],
          color: XGrid[1],
        },
        border: {
          display: XBorder[0],
          color: YBorder[1],
        },
        ticks: {
          display: XLegend[0],
          color: XLegend[1],
          align: XLegend[2],
          padding: 16,
        },
      },
      y: {
        beginAtZero: YBeginZero,
        grid: {
          display: YGrid[0],
          color: YGrid[1],
        },
        border: {
          display: YBorder[0],
          color: YBorder[1],
        },
        ticks: {
          display: YLegend[0],
          color: YLegend[1],
          stepSize: YLegend[2],
          callback: (value) => value + YLegend[3],
          padding: 16,
        },
      },
    },
    plugins: {
      title: {
        display: title[0],
        text: title[1],
        color: title[2],
        align: title[3],
        padding: {
          top: 0,
          bottom: 30,
        },
      },
      legend: {
        display: grafLegend[0],
        position: grafLegend[1],
        labels: {
          color: colors.gray7,
          usePointStyle: true,
          pointStyle: 'rectRounded',
          padding: 12,
        },
      },
    },
  }
  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: dataLegend,
        data: dataGraf,
        borderWidth: borderWidthLine,
        pointRadius: pointRad,
        pointBackgroundColor: color,
        borderColor: color,
        backgroundColor: background[1],
        tension: tensionLine,
        fill: background[0],
        pointStyle: pointStyled,
        borderDash: borderDashed,
      },
    ],
  }

  return (
    <Wrapper>
      <Line data={data} options={options} width={'100%'} height={'100%'} />
    </Wrapper>
  )
}
