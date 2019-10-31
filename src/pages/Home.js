import React from 'react'
import Carousel from '../components/carousel/Carousel'
import TimeLine from '../components/timeline/TimeLine'
import Theme from '../components/theme/Theme'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Carousel />
                <TimeLine />
                <Theme />
            </>
        )

    }
}

export default Home