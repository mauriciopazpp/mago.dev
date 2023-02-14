import React from 'react';
import { JournalCode } from "react-bootstrap-icons";

const MockUp = () => {
	return (
		<div className="mockup">
			<h1>Buttons</h1>
			<div className="buttons">
				<button type="button" className="btn btn-default">Default</button>
				<button type="button" className="btn btn-primary">Primary</button>
				<button type="button" className="btn btn-success">Success</button>
				<button type="button" className="btn btn-info">Info</button>
				<button type="button" className="btn btn-warning">Warning</button>
				<button type="button" className="btn btn-danger">Danger</button>
				<button type="button" className="btn btn-link">Link</button>
			</div>

			<h1>Alerts</h1>
			<div className="bs-example bs-example-bg-classes" data-example-id="contextual-backgrounds-helpers">
				<p className="alert bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				<p className="alert bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
				<p className="alert bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
				<p className="alert bg-warning">Etiam porta sem malesuada magna mollis euismod.</p>
				<p className="alert bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
			</div>

			<h1>Alerts 2</h1>
			<div className="bs-example bs-example-bg-classes" data-example-id="contextual-backgrounds-helpers">
				<div className="alert bg-primary w-50 p-3">
					<h4>Unidade 1</h4>
					<div className="row">
						<div className="col-sm">
							Nullam id dolor id nibh ultricies vehicula ut id elit.
						</div>
						<div className="col-sm pull-right">
							<button type="button" className="btn btn-primary btn-guide">
								<JournalCode /> Guia
							</button>
						</div>
					</div>
				</div>
				<div className="alert bg-success w-50 p-3">
					<h4>Unidade 1</h4>
					<div className="row">
						<div className="col-sm">
							Nullam id dolor id nibh ultricies vehicula ut id elit.
						</div>
						<div className="col-sm pull-right">
							<button type="button" className="btn btn-success btn-guide">
								<JournalCode /> Guia
							</button>
						</div>
					</div>
				</div>
				<div className="alert bg-info w-50 p-3">
					<h4>Unidade 1</h4>
					<div className="row">
						<div className="col-sm">
							Nullam id dolor id nibh ultricies vehicula ut id elit.
						</div>
						<div className="col-sm pull-right">
							<button type="button" className="btn btn-info btn-guide">
								<JournalCode /> Guia
							</button>
						</div>
					</div>
				</div>
				<div className="alert bg-warning w-50 p-3">
					<h4>Unidade 1</h4>
					<div className="row">
						<div className="col-sm">
							Nullam id dolor id nibh ultricies vehicula ut id elit.
						</div>
						<div className="col-sm pull-right">
							<button type="button" className="btn btn-warning btn-guide">
								<JournalCode /> Guia
							</button>
						</div>
					</div>
				</div>
				<div className="alert bg-danger w-50 p-3">
					<h4>Unidade 1</h4>
					<div className="row">
						<div className="col-sm">
							Nullam id dolor id nibh ultricies vehicula ut id elit.
						</div>
						<div className="col-sm pull-right">
							<button type="button" className="btn btn-danger btn-guide">
								<JournalCode /> Guia
							</button>
						</div>
					</div>
				</div>
			</div>

			<h1>Forms</h1>

			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group padding-1">
					<label htmlFor="exampleInputFile">File input</label>
					<input type="file" id="exampleInputFile" />
					<p className="help-block">Example block-level help text here.</p>
				</div>
				<div className="checkbox">
					<label>
					<input type="checkbox" /> Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>

			<br />
			<h1>Counter</h1>

			<button type="button" className="btn btn-primary position-relative">
			Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span className="visually-hidden">unread messages</span></span>
			</button>

			<br />
			<h1>Navbar</h1>

			<nav className="navbar navbar-light bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
					<img src="images/magedev.png" alt="" height="40" className="d-inline-block align-text-top" />
					<span className='text-white'>mage</span><b><span className="text-warning">.dev</span></b>
					</a>
				</div>
			</nav>
        </div>
	);
};

export default MockUp;
