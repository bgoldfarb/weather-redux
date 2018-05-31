import React from 'react'
import _ from 'lodash'
import { round, sum } from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data){
    return round(sum(data)/data.length)
}

export default (props) => {

    // var result = Object.keys(props.data).map(function(key) {
    //     return [Number(key), props.data[key]];
    //   });
    let arr = _.values(props.data);
    return (
        <div>
            <Sparklines height={120} width={180} data={arr}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{average(props.data)} {props.units} </div>
        </div>
    )
}