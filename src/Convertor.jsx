import React, { useEffect, useState } from 'react'
import { Card,Form,Input } from "antd";
import { Select } from 'antd';

const Convertor = () => {

	const defaultFirstSelectValue= "Bitcoin";
	const defaultSecondSelectValue= "Ether"

	const [cryptoList,setCryptoList]= useState([]);
	const [inputValue,setInputValue]= useState('0');
	const [firstSelect,setFirstSelect]= useState(defaultFirstSelectValue);
	const [secondSelect,setSecondSelect]= useState(defaultSecondSelectValue);
	const [result,setResult]= useState('0')
	useEffect(()=>{
		if(cryptoList.length===0) return
		const firstSelectRate= cryptoList.find((item)=>{
			return item.label=== firstSelect;
		}).rate
		const secondSelectRate= cryptoList.find((item)=>{
			return item.label=== secondSelect;
		}).rate
		const result= (inputValue*secondSelectRate)/firstSelectRate;
		setResult(result.toFixed(3));
	},[inputValue,firstSelect,secondSelect, cryptoList])

	const apiUrl="https://api.coingecko.com/api/v3/exchange_rates";

	useEffect(()=>{
		fetchdata()
	},[])

	async function fetchdata(){
		const response = await fetch(apiUrl);
		const jsonData= await response.json();
		const data= jsonData.rates;
		let tempArray= Object.entries(data).map(item=>{
			return {
				rate: item[1].value,
                value: item[1].name,
                label: item[1].name
			}
		})	
		setCryptoList(tempArray);
	}

	return (
		<div className='container'>
			<Card title="Bitcoin Conversion" className='cardStyle'>
				<Form>
				 	<Form.Item>
						<Input onChange={(event)=>{
							setInputValue(event.target.value)
						}}/>
					</Form.Item>
				</Form>
				<Select 
					defaultValue={defaultFirstSelectValue}
					style={{ width: 160 }}
					options	= {cryptoList}
					onChange={(value)=>{setFirstSelect(value)}}
				/>
				<Select 
					defaultValue={defaultSecondSelectValue}
					style={{ width: 160 }}
					options	= {cryptoList}
					onChange={(value)=>{setSecondSelect(value)}}
				/>
				
				<p>{inputValue} {firstSelect} = {result} {secondSelect}</p>

			</Card>
		</div>
	)
}

export default Convertor