import React, { Component } from 'react';
import Image from './image';
import User from './user'
import { Container, Row, Col, Alert,Button ,Badge, Breadcrumb,Card} from 'react-bootstrap';


class App  extends Component {
		render(){
				return (
						<Container>
								<Row>
										<Col md={3} xs={6}>
												<Alert variant="primary">Website React Bootstrap</Alert>
										</Col>
										<Col sm= {{span:3, offset:4}}>
												<Button variant="primary">Notifications
														<Badge variant="light">9</Badge>
												</Button>
												<Button variant="primary">Messages
														<Badge variant="light">10</Badge>
												</Button>
										</Col>
										<Col sm= {1}>
												<Image />
										</Col>
										<Col sm= {1}>
												<User />
										</Col> 
								</Row>


								<Row>
										<Col md={{span:6, offset:8}}>
												<Breadcrumb>
														<Breadcrumb.Item href="#">
																Home
														</Breadcrumb.Item>

														<Breadcrumb.Item href="#">
																Berita
														</Breadcrumb.Item>

														<Breadcrumb.Item active>
																Bola
														</Breadcrumb.Item>

												</Breadcrumb>
										</Col>
								</Row>

								<Row className="justify-content-md-center">
										<Col md={3}>
												<Card style={{width:"300px"}}>
														<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"/>
														<Card.Body>
																<Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
																<Card.Text>Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailand di final Piala Tiongkok.
																		Diego Godin boleh berbangga setelah resmi menjadi pemain Uruguay dengan caps terbanyak, of  melewati pencapaian Maxi Pereira.

																		Laga melawan Thailand yang digelar di Nanning pada Senin (25/3) malam WIB kemarin menjadi penampilan Godin yang ke-126 bersama Uruguay, sebagaimana negaranya menang telak 4-0 untuk meraih gelar Piala Tiongkok.
																</Card.Text>
																<Button variant="primary" href="https://www.goal.com/id/berita/diego-godin-ukir-rekor-spesial-lawan-thailand/nxd98rmcte3c1kgf8u7cc973v">Read More</Button>

														</Card.Body>
												</Card>
										</Col>


										<Col md={3}>

												<Card style={{width:"300px"}}>
														<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"/>
														<Card.Body>
																<Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
																<Card.Text>	Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.

																</Card.Text>
																<Button variant="primary" href="https://www.goal.com/id/berita/neymar-bahas-kontrak-baru-di-paris-saint-germain/1tpgyz0ebqtquzdisgwrxlr09">Read More</Button>

														</Card.Body>
												</Card>
										</Col>

										<Col md={3}>
												<Card style={{width:"300px"}}>
														<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"/>
														<Card.Body>
																<Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
																<Card.Text>
																  Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimistis.Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
																</Card.Text>
																<Button variant="primary" href="https://www.goal.com/id/berita/ross-barkley-inggris-mau-jadi-tim-terbaik-di-dunia/bw6qy1zbf86r1mih71l8jvhy8">Read More</Button>

														</Card.Body>
												</Card>
										</Col>


										<Col md={3}>
												<Card style={{width:"300px"}}>
														<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"/>
														<Card.Body>
																<Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
																<Card.Text>Gelandang Indonesia U-23 itu pun bertekad untuk membawa timnya meraih kemenangan saat melawan Brunei
																</Card.Text>
																<Button variant="primary" href="https://www.goal.com/id/berita/sani-rizki-fauzi-tegaskan-mental-pemain-timnas-indonesia-u/rtlk0xjehuk81j3h8mvfy22mf">Read More</Button>

														</Card.Body>
												</Card>
										</Col>


								</Row>
						</Container>								 
						);
						}
						}

						export default App;