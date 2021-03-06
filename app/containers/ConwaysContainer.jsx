import React, { Component } from 'react'
import Conways from '../components/Conways'
import { connect } from 'react-redux'
import { updateTable, togClass, clearBoard, resetRandom, autoPlay, frozeUp, changeBoardSize } from '../reducers/conway'
import { isBoardBlank } from '../utilities/conway'

let tableObject, stepInterval, frozen

const mapStateToProps = state => {
  tableObject = state.conway.table.concat()
  frozen = state.conway.frozenTable
  const allOff = isBoardBlank(tableObject)
  return {
    tableObject,
    allOff,
    frozenTable: frozen,
    autoPlayOn: state.conway.autoPlay,
    boardSize: state.conway.boardSize
  }
}

const mapDispatchToProps = dispatch => (
  {
    nextStep() {
      if (frozen) {
        clearInterval(stepInterval)
        stepInterval=null
        dispatch(autoPlay(false))
      }
      dispatch(updateTable(tableObject))
    },
    toggleClass(r, c, table) {
      dispatch(frozeUp(false))
      dispatch(togClass(r, c, tableObject))
    },
    clearTheBoard(h, w) {
      dispatch(frozeUp(false))
      dispatch(clearBoard(h, w))
    },
    resetRand(h, w) {
      dispatch(frozeUp(false))
      dispatch(resetRandom(h, w))
    },
    autoPl(bool, nS) {
      if (!stepInterval) {
        stepInterval = setInterval(nS.bind(this), 500)
      } else {
        clearInterval(stepInterval)
        stepInterval=null
      }
      return dispatch(autoPlay(bool))
    },
    changeActiveSize(size, table) {
      dispatch(frozeUp(false))
      dispatch(changeBoardSize(size, table))
    },
  }
)

const ConwaysContainer = connect(mapStateToProps, mapDispatchToProps)(Conways)

export default ConwaysContainer
