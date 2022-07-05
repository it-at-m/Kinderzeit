import React from 'react'
import {default as data} from '../../data.json'



export default function Filter() {


        const { data } = this.state;
    
        let onResetArray = () => {
            this.setState({ dataData: this.state.data })
          }
    
        let filterPfingsten = () => {
            const pfingstenData = data.filter( (data) => data.holidayPeriod.includes("pfingsten"));    
            this.setState({ datas: pfingstenData });
        }
    
    
        let filterSommerferien = () => {
            const sommerferienData = data.filter( (data) => data.holidayPeriod.includes("Sommerferien"));    
            this.setState({ datas: sommerferienData });
        }

        let filter = () => {
            const pfingstenData = data.filter( (data) => data.holidayPeriod.includes("pfingsten"));    
            this.setState({ datas: pfingstenData });
        }

        let filterHerbstferien = () => {
            const herbstferienData = data.filter( (data) => data.holidayPeriod.includes("Herbstferien"));    
            this.setState({ datas: herbstferienData });
        }

        
        
}
