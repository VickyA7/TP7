// services/HttpService.ts

export class HttpService {
 constructor(private baseUrl: string) {}

 async get(endpoint: string): Promise {
 try {
 const response = await fetch(`${this.baseUrl}${endpoint}`);

 if (!response.ok) {
 throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
 }

 const data: T = await response.json();
 return data;
 } catch (error) {
 console.error('Error en la petición:', error);
 throw error;
 }
 }

 async getById(endpoint: string, id: number): Promise {
 return this.get(`${endpoint}/${id}`);
 }

 async post(endpoint: string, body: Partial): Promise {
 try {
 const response = await fetch(`${this.baseUrl}${endpoint}`, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(body),
 });

 if (!response.ok) {
 throw new Error(`HTTP Error: ${response.status}`);
 }

 return await response.json();
 } catch (error) {
 console.error('Error en POST:', error);
 throw error;
 }
 }
}