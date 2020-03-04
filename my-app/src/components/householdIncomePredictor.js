const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const btoa = require("btoa");
const wml_credentials = new Map();

export function apiPost(scoring_url, token, mlInstanceID, payload, loadCallback, errorCallback){
	const oReq = new XMLHttpRequest();
	oReq.addEventListener("load", loadCallback);
	oReq.addEventListener("error", errorCallback);
	oReq.open("POST", scoring_url);
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", token);
	oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
	oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	oReq.send(payload);
}


// NOTE: generate iam_token based on provided documentation
const wmlToken = "Bearer " + "eyJraWQiOiIyMDIwMDIyNTE4MjgiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLTU4NDFkMjdkLTg4OTctNDg5MC1hNzRiLTQ4MjU3YWU2MmJjZiIsImlkIjoiaWFtLVNlcnZpY2VJZC01ODQxZDI3ZC04ODk3LTQ4OTAtYTc0Yi00ODI1N2FlNjJiY2YiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC01ODQxZDI3ZC04ODk3LTQ4OTAtYTc0Yi00ODI1N2FlNjJiY2YiLCJzdWIiOiJTZXJ2aWNlSWQtNTg0MWQyN2QtODg5Ny00ODkwLWE3NGItNDgyNTdhZTYyYmNmIiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiJiMGJmYzZiYzY2ODY0YWZiOTA2NDZjOTI2Njk5OTlkMiJ9LCJpYXQiOjE1ODMyNjQzNjMsImV4cCI6MTU4MzI2Nzk2MywiaXNzIjoiaHR0cHM6Ly9pYW0uY2xvdWQuaWJtLmNvbS9pZGVudGl0eSIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImRlZmF1bHQiLCJhY3IiOjEsImFtciI6WyJwd2QiXX0.TY4Pf9SzGpxsFiu59Dd36BFwZ2H3u6iyIaReJ61YNDcJ6QUHU1lXcsGB-yjvYrnLwd3E-ocovLzBz4KAyU6vIENBfGXLITWAFn0CIkd8-6B5uTqfgDcZi_j-93zGdshPANjJLZNSKuZHsZPO8hTTjkxliMsEEgvDqPAB7I8AaO0_ZWVd7HZT9xtgo8Ef_qYDmuJ5uK807cWEI61yBl6Zwtexj1xwXDpW3QY_9wN445FJ4dGmqXwp3TisxmRCoGI2Jn0lBhlFmO04MsORVO5UyEyX0YZwfubSuQtD-Xbp0_-tlH5pJc74LYJUzkxM4MQgfpISQnu1qdSXQvxMmMhmkQ";


// NOTE: retrieve ml_instance_id based on provided documentation
const mlInstanceId = "1e8014fe-739f-4c23-b331-2735cf0267ab";

// NOTE: manually define and pass the array(s) of values to be scored in the next line
const payload = '{"input_data": [{"fields": ["id", "State_Code", "State_Name", "State_ab", "County", "City", "Place", "Type", "Primary", "Zip_Code", "Area_Code", "ALand", "AWater", "Lat", "Lon", "Median", "Stdev", "sum_w"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
const scoring_url = "https://us-south.ml.cloud.ibm.com/v4/deployments/9c899db6-8ef7-4aff-a2cb-91052407439e/predictions";


apiPost(scoring_url, wmlToken, mlInstanceId, payload, 

	function (resp) {
		let parsedPostResponse;
		try {
			parsedPostResponse = JSON.parse(this.responseText);
		} catch (ex) {
			// TODO: handle parsing exception
		}
		console.log("Scoring response");
		console.log(parsedPostResponse);
	}, 

	function (error) {
		console.log(error);
	}
);

export function getApiElements(){
	return payload;
}