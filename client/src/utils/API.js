import axios from 'axios'

    const API = {
        getRecipe: function(){
            return axios('/api/recipe')
        },
        
        // deleteOrder:function(id) {
        //     return axios.delete("/api/order/" + id).then(result => result.data);
        // },
    }

    export default API;