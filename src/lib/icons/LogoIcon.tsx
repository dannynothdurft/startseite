'use client'
import SVGProps from '@/types/SVGProps'
import { FC } from 'react'

const LogoIcon: FC<SVGProps> = ({
  width = '35',
  height = '35',
  Dref,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 122.88867 189.64064"
      data-ref={Dref}
      height={height}
      width={width}
      fill="none"
    >
      {/* Buchstabe "S" */}
      <text
        x="71.82737"
        y="166.31398"
        transform="translate(-39.019528,-43.751953) scale(0.95558909,1.0464749)"
        data-ref={Dref}
        style={{
          fontSize: '88.5288px',
          lineHeight: '8.55',
          textAlign: 'start',
          direction: 'ltr',
          textAnchor: 'start',
          display: 'inline',
          fontFamily: 'SignPainter, sans-serif',
          fill: 'currentColor',
          fillOpacity: 1,
          stroke: 'currentColor',
          strokeWidth: '0.0328575',
          strokeDasharray: 'none',
          paintOrder: 'markers fill stroke',
        }}
      >
        S
      </text>

      {/* Buchstabe "A" */}
      <text
        x="103.53098"
        y="176.283"
        transform="translate(-39.019528,-43.751953) scale(0.93240762,1.0724923)"
        data-ref={Dref}
        style={{
          fontSize: '78.5354px',
          lineHeight: '8.55',
          textAlign: 'start',
          direction: 'ltr',
          textAnchor: 'start',
          display: 'inline',
          fontFamily: 'SignPainter, sans-serif',
          fill: 'currentColor',
          fillOpacity: 1,
          stroke: 'currentColor',
          strokeDasharray: 'none',
          strokeWidth: '0.0772982',
          paintOrder: 'markers fill stroke',
        }}
      >
        A
      </text>

      {/* Äußerer Rahmen mit Innenlinie */}
      <path
        d="m 39.019531,52.850197 0,171.504753 a 9.0376308,9.0376308 45 0 0 9.037631,9.03763 H 152.88579 a 9.0224121,9.0224121 135 0 0 9.02241,-9.02241 l 0,-171.871527 a 8.7466899,8.7466899 45 0 0 -8.74669,-8.74669 H 48.117775 a 9.0982436,9.0982436 135 0 0 -9.098244,9.098244 z m 8.986395,-5.098244 H 153.19753 a 4.710673,4.710673 45 0 1 4.71067,4.710673 V 224.29407 a 5.0985067,5.0985067 135 0 1 -5.09851,5.09851 l -105.191598,0 a 4.5985613,4.5985613 45 0 1 -4.598561,-4.59856 V 52.738348 a 4.9863951,4.9863951 135 0 1 4.986395,-4.986395 z"
        transform="translate(-39.019528,-43.751953)"
        fill="currentColor"
        data-ref={Dref}
      />

      {/* Obere Leiste mit Innenfläche */}
      <path
        d="m 49.060547,55.88413 v 23.04995 a 2.7280288,2.7280288 45 0 0 2.728029,2.728029 l 97.616364,0 a 2.6614741,2.6614741 135 0 0 2.66147,-2.661474 v -23.04995 a 2.7280288,2.7280288 45 0 0 -2.72803,-2.728029 H 51.722021 a 2.661474,2.661474 135 0 0 -2.661474,2.661474 z m 4,3.254474 94.823393,0.104752 0.18247,18.418753 -39.52271,0.06917 -0.18564,-5.499183 -15.576444,-0.06917 0.0187,5.464597 -39.739765,0.03459 z"
        transform="translate(-39.019528,-43.751953)"
        fill="currentColor"
        data-ref={Dref}
      />

      {/* Horizontale Trennlinie */}
      <path
        d="M 40.973668,87.826965 H 159.85243"
        transform="translate(-39.019528,-43.751953)"
        stroke="currentColor"
        strokeWidth="4"
        data-ref={Dref}
      />

      {/* Haupt-Innenbereich */}
      <path
        d="M 51.121094,96.417522 V 222.70252 c -3e-6,1.44469 1.171147,2.61584 2.615835,2.61584 h 93.278721 c 1.59859,0 2.89451,-1.29592 2.89451,-2.89451 V 96.527944 c 0,-1.444684 -1.17115,-2.615832 -2.61583,-2.615835 l -11.2297,-0.0242 a 1.8587809,1.8587809 135.09034 0 0 -1.86279,1.856921 l -1.4e-4,0.141778 -67.081665,0.05642 A 2.2365448,2.2365448 40.694404 0 0 64.75841,93.912111 l -11.131903,0 c -1.383701,0 -2.505413,1.121712 -2.505413,2.505413 z m 3.996093,1.490681 7.913679,-0.129698 a 2.4800622,2.4800622 43.608544 0 0 2.505305,2.386485 L 135.65758,100.036 a 2.2855337,2.2855337 140.36166 0 0 2.50045,-2.071373 l 7.75605,-0.05641 V 221.32227 H 55.117187 Z"
        transform="translate(-39.019528,-43.751953)"
        fill="currentColor"
        data-ref={Dref}
      />

      {/* Zentrierter Innenrahmen */}
      <path
        d="M 65.594993,107.52008 H 135.0573 a 4.9470734,4.9470734 45 0 1 4.94708,4.94707 v 97.67965 a 4.9508072,4.9508072 135 0 1 -4.95081,4.9508 l -69.058486,0 a 4.8342448,4.8342448 45 0 1 -4.834245,-4.83424 v -98.30913 a 4.4341537,4.4341537 135 0 1 4.434154,-4.43415 z"
        transform="translate(-39.019528,-43.751953)"
        stroke="currentColor"
        strokeWidth="3.96851"
        data-ref={Dref}
      />

      <path
        d="m 61.087621,202.58782 78.856209,0.2594"
        transform="translate(-39.019528,-43.751953)"
        stroke="currentColor"
        strokeWidth="3.96851"
        data-ref={Dref}
      />
    </svg>
  )
}

export default LogoIcon
