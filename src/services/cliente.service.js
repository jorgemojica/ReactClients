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

}

export const clienteService = new ClienteService();