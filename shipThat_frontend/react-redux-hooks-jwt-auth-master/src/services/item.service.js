import axios from 'axios';
import authHeader from './auth-header';


const API_URL = "http://localhost:8085/api";

export const itemService = {
    add,
    makeBid,
    getUserItems
};

async function add(item) {
    console.log("In service add")
    console.log("Datetime - " + item.datetime)
    let body = {"item_name" : item.itemName, "description" : item.description, "base_price" : item.baseprice, "datetime" : item.datetime,
                "source_address" : item.source_address, "destination_address" : item.destination_address, "image" : item.image.split("\\")[2] };
    return await axios.post(`${API_URL}/addItem`, body, {headers: authHeader()}).then(handleResponse);
    // return axios.get(`${API_URL}/test/all`)
}

async function makeBid(bid) {
    console.log("In service makeBid")
    let body = {"bid_value" : bid.price };
    return await axios.post(`${API_URL}/makeBid/${bid.id}`, body, {headers: authHeader()}).then(handleResponse);
    // return axios.get(`${API_URL}/test/all`)
}

async function getUserItems(item) {
    console.log("In service getUserItems")
    return await axios.get(`${API_URL}/getUserItems`, {headers: authHeader()}).then(handleResponse);
    // return axios.get(`${API_URL}/test/all`)
}


function handleResponse(response) {
    return response.data;
}

