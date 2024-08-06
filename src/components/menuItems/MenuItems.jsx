import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardMenu({
    imgurl,
    cardtitle,
    cardtext
}) {
    return (
        <>
            <Card
                className="col-lg-4 col-md-6 col-sm-12"
                style={{ width: '17rem' }}
            >
                <Card.Img
                    variant="top"
                    src={imgurl}
                    style={{
                        borderBottom:
                            '1px solid #ccc'
                    }}
                />
                <Card.Body className="d-flex flex-column justify-content-start gap-4">
                    <Card.Title
                        variant="h5"
                        style={{
                            fontWeight: '700'
                        }}
                    >
                        {cardtitle}
                    </Card.Title>

                    <Card.Text
                        variant="h6"
                        style={{
                            fontWeight: '400'
                        }}
                    >
                        {cardtext}€
                    </Card.Text>
                    <Button
                        variant="dark"
                        disabled
                    >
                        order now
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardMenu;
