import React from 'react';
import { Link } from 'react-router';

class CompanyPage extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
          company: {
              id: Math.floor(Math.random() * 10000).toString(),
              companyName: ''
          }
      };

      this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
  }

  onCompanyNameChange(event) {
      const companyName = event.target.value;
      const company = this.state.company;
      this.setState({
          company: {
              ...company,
              companyName
          }
      });
  }

  render() {
    return (
      <div>
        <h1>Company</h1>
        <form>
            <fieldset>
                <div className="row">
                    <div className="col-xs-6">
                        <label htmlFor="companyName">Company name</label>
                        <input type="text" className="form-control" placeholder="Company name" id="companyName"
                               onChange={this.onCompanyNameChange} value={this.state.company.firstName}/>
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    )
  }
}

export default CompanyPage;
