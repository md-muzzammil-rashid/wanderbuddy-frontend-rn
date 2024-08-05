import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConnector } from "../../Services/APIConnector";
import { METHODS, tripEndPoint } from "../../Services/apis";
import { getTripDetailsAPI, getTripsAPI } from "../../Services/Operations/TripAPI";

const tripSice = createSlice({
    name:'trip',
    initialState:{
        selectedDay:0
    },
    reducers:{
        setTrip:(state, action) => {
            state.trip = action.payload;
            state.filterDay = state?.trip?.placesToVisit            
            .sort((a,b)=>{
                const ATime = `${a.date}${a.time}`
                const BTime = `${b.date}${b.time}`
                if(ATime < BTime)return -1;
                else if (ATime > BTime)return 1;
                else return 0;
            });
            state.trip.placesToVisit = state?.trip?.placesToVisit            
            .sort((a,b)=>{
                const ATime = `${a.date}${a.time}`
                const BTime = `${b.date}${b.time}`
                if(ATime < BTime)return -1;
                else if (ATime > BTime)return 1;
                else return 0;
            });

        },
        tripOnNDay:(state, action) => {
            state.selectedDay = action.payload
            if(action.payload !== 0){
                state.filterDay = state?.trip?.placesToVisit.filter(place => place?.day === action.payload)
                .sort((a,b)=>{
                    if(a.time < b.time)return -1;
                    else if (a.time > b.time)return 1;
                    else return 0;
                })
            }else{
                state.filterDay = state?.trip?.placesToVisit            
                    .sort((a,b)=>{
                    const ATime = `${a.date}${a.time}`
                    const BTime = `${b.date}${b.time}`
                    if(ATime < BTime)return -1;
                    else if (ATime > BTime)return 1;
                    else return 0;
                })
            }
        },
        setAllTrips:(state, action) => {
            state.allTrips = action?.payload
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(setTripDetails.fulfilled, (state, action) => {
            state.trip = action.payload;
            state.trip?.placesToVisit.sort((a,b) => (a?.data?.slice(0,11)+a?.time) - (b?.date?.slice(0,11)+b.time))
            state.filterDay = state?.trip?.placesToVisit
        })
        builder.addCase(setTripDetails.rejected, (state, action) => {
        })
        builder.addCase(setAllTripsThunk.fulfilled, (state, action) => {
            state.allTrips = action.payload;
        })
    }
})

export const setTripDetails = createAsyncThunk('tripDetails', async(data)=> {
    return await getTripDetailsAPI(data)
})

export const setAllTripsThunk = createAsyncThunk( 'allTrips', async () => {
    return await getTripsAPI();
})

export default tripSice.reducer
export const {setTrip, tripOnNDay, setAllTrips} = tripSice.actions