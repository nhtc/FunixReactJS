import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
function Footer(props) {
	return (
		<div className='footer bg-info sticky-bottom'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-5 col-sm-5 text-left info'>
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road
							<br />
							Clear Water Bay, Kowloon
							<br />
							HONG KONG
							<br />
							<i className='fa fa-phone' aria-hidden='true'></i>
							: +852 1234 5678
							<br />
							<i className='fa fa-fax fa-lg'></i>: +852 8765 4321
							<br />
							<i className='fa fa-envelope fa-lg'></i>:{" "}
							<a href='mailto:confusion@food.net'>
								confusion@food.net
							</a>
						</address>
					</div>
					<div className='col-7 col-sm-4 align-self-center'>
						<div className='text-left'>
							<a
								className='btn btn-social-icon btn-google'
								href='http://google.com/+'
							>
								<i
									className='fa fa-google-plus-square fa-3x'
									aria-hidden='true'
								></i>
							</a>
							<a
								className='btn btn-social-icon btn-facebook'
								href='http://www.facebook.com/profile.php?id='
							>
								<i
									className='fa fa-facebook-square fa-3x'
									aria-hidden='true'
								></i>
							</a>
							<a
								className='btn btn-social-icon btn-linkedin'
								href='http://www.linkedin.com/in/'
							>
								<i className='fa fa-linkedin-square fa-3x'></i>
							</a>
							<a
								className='btn btn-social-icon btn-twitter'
								href='http://twitter.com/'
							>
								<i className='fa fa-twitter-square fa-3x'></i>
							</a>
							<a
								className='btn btn-social-icon btn-google'
								href='http://youtube.com/'
							>
								<i className='fa fa-youtube-square fa-3x'></i>
							</a>
							<a className='btn btn-social-icon' href='mailto:'>
								<i
									className='fa fa-envelope-o fa-3x'
									aria-hidden='true'
								></i>
							</a>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<p>© Copyright 2018 Ristorante Con Fusion</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
