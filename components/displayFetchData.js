import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Row, Col, Container, Button, SearchIcon} from 'react-bootstrap';
import list from '../Data.json'

import SelectButton from './selectButton'
import '../styles/amazon.css'
// import SearchIcon from
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

const DisplayFetchData = ({ handleClick, data }) => {
  const [userData, setUserData] = React.useState([])
  const [searchData, setSearchData] = React.useState([])
  const [Keyword, setKeyword] = React.useState('')
  const [MDM_PARTY_INDUSTRY, setMDM_PARTY_INDUSTRY] = React.useState('')

  React.useEffect(() => {
    setUserData(list)
    setSearchData(list)
  }, [])

  const searchHandler = () => {
    // alert("clicked");
    const filterNewnewData = userData
      .filter((x) => x.Keyword == (Keyword == '' ? x.Keyword : Keyword))
      .filter(
        (y) =>
          y.MDM_PARTY_INDUSTRY ==
          (MDM_PARTY_INDUSTRY == ''
            ? y.MDM_PARTY_INDUSTRY
            : MDM_PARTY_INDUSTRY),
      )
    setSearchData(filterNewnewData)
  }

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.Keyword.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <section>
      <div className="row">
        <div className="col-4" style={{ backgroundColor: 'green' }}>
          <div className="row" style={{ paddingTop: 5 }}>
            <div>
              <select
                className="form-control"
                onChange={(e) => setMDM_PARTY_INDUSTRY(e.target.value)}
              >
                {list.map((e, key) => {
                  return (
                    <>
                      <option key={key} value={e.MDM_PARTY_INDUSTRY}>
                        {e.MDM_PARTY_INDUSTRY}
                      </option>
                    </>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="row" style={{ paddingTop: 10 }}>
            {/* <div> */}

            <div className="search">
              <div className="searchInputs"></div>
            </div>
            <input
              className="form-control"
              type="text"
              value={wordEntered}
              placeholder="Please Keyword...."
              onChange={handleFilter}
              // onChange={(e) => setKeyword(e.target.value)}
            />
            {/* </div> */}
            {filteredData.length != 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    // <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.Keyword} </p>
                    //  </a>
                  )
                })}
              </div>
            )}
          </div>
          <div className="row" style={{ paddingTop: 10 }}>
            <div>
              <button
                className="btn btn-warning btn-rounded "
                onClick={() => searchHandler()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  {/* <th>Age</th> */}
                  <th>Industry</th>
                </tr>
              </thead>
              <tbody>
                {searchData && searchData.length > 0
                  ? searchData.map((item) => (
                      <tr>
                        <td>{item.Keyword}</td>
                        {/* <td>{item.price}</td> */}
                        <td>{item.MDM_PARTY_INDUSTRY}</td>
                        <td>
                          <SelectButton
                            key={item.id}
                            item={item}
                            handleClick={handleClick}
                          />
                        </td>
                      </tr>
                    ))
                  : 'Date Not Found!'}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisplayFetchData
