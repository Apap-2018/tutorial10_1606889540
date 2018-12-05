const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
	getAllPasien() {
		return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
			method: 'GET',
		})
			.then(response => {
				return response.json()
			})
            .then(jsonResponse =>{
                return jsonResponse
            })

	},
	getDetailPasien(idPasien) {
	    return fetch(`${cors}${baseUrl}/getPasien/${idPasien}`,{
	        method:'GET',
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            return jsonResponse
        })
		/** 
		 * TODO: Fetch detail data pasien
		 * @param idPasien
		 * @return detailPasien
		 */
	},
	updateStatusPasien(requestBody) {
	    return fetch(`${cors}${baseUrl}/1/updatePasien`,{
	        method:'POST',
            headers:{
	            'Content-Type':'application/json'
            },
            body:JSON.stringify(requestBody)
        })
            .then(response => {
                return response.json()
            })
            .then(jsonResponse =>{
                return jsonResponse
            })


		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
	},

    getAllStafFarmasi(){
        return fetch(`${cors}${baseUrl}/1/getAllStaffFarmasi`, {
            method: 'GET',
        })
            .then(response => {
                return response.json()
            })
            .then(jsonResponse =>{
                return jsonResponse
            })


    },

    addlabResult(requestBody){
        return fetch(`${cors}${baseUrl}/1/addLabResult`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(requestBody)
        })
            .then(response => {
                return response.json()
            })
            .then(jsonResponse =>{
                return jsonResponse
            })

    }
}