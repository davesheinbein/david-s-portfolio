import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Lottieanimation() {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            render: 'svg',
            loop: true,
            autoPlay: true,
            animationData: require('./lf30_editor_V4hAoy.json')
        })
    }, [])

    return (
        <div className='container' ref={container}></div>
    )
}

export default Lottieanimation
