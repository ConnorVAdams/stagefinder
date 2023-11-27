import Header from "../../components/header"
import VenueCard from "../../components/venueCard/VenueCard"
import { useFetch } from '../../hooks/customHooks'
import { Container, Row, Col } from 'react-bootstrap'

const URL = 'http://127.0.0.1:5000/api/v1/venues'


const Venues = () => {

    const { data } = useFetch(URL)

    console.log(data)

    return (
        <>
            <Header text='All Venues' />
            <Container>
                <Row>
                    {data.map(({ name, location }) => (
                        <Col md={4}>
                            <VenueCard name={name} location={location} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Venues