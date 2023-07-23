import React from 'react'
import './CircularProgressBar.css'
const CircularProgressBar1=({ percentage, circlewidth})=> {
    const radius=55;
    const dashArrary=radius*Math.PI*2;
    const dashOffset = 78;
  return (
    <div className='bar'>
        <svg width={circlewidth} height={circlewidth} viewBox={`0 0 ${circlewidth} ${circlewidth}`}>
            <circle
             cx={circlewidth / 2}
             cy={circlewidth / 2}
             strokeWidth="10px"
             r={radius}
             className='circle_background'
            />
             <circle
             cx={circlewidth / 2}
             cy={circlewidth / 2}
             strokeWidth="12px"
             r={radius}
             className='circle_progress'
             style={{
                strokeDasharray:dashArrary,
                strokeDashoffset:dashOffset,
             }}
             transform={`rotate(-90 ${circlewidth/2} ${circlewidth/2} )`}
            />
            <text x="50%" y="50%" dy="0.8rem" textAnchor='middle' className='circle_text'>
                {dashOffset}%
            </text>
            <text x="50%" y="90%" dy="0.8rem" textAnchor='middle'className='text'>
                Top
            </text>

        </svg>
    </div>
  )
}

export default CircularProgressBar1