import http from "../http-common";

class ClienteService {

    getAll() {
        return http.get("/");
    }

    create(cliente) {
        return http.post("/", cliente);
    }

    delete(id) {
        return http.delete(`/${id}`);
    }

    update(id, cliente) {
        console.log("Service", cliente);
        return http.put(`/${id}`, cliente);
    }

    getById(id) {
        return http.get(`/${id}`);
    }

}

export const clienteService = new ClienteService();