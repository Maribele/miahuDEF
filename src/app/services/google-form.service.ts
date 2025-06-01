import { Injectable, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { type Observable, of } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GoogleFormService {
  private http = inject(HttpClient)

  submitForm(formData: any): Observable<any> {
    // Simular envío del formulario
    console.log("Datos del formulario:", formData)

    // En un caso real, aquí enviarías los datos a Google Forms o tu backend
    // return this.http.post('URL_DEL_GOOGLE_FORM', formData);

    // Por ahora, simulamos una respuesta exitosa
    return of({ success: true, message: "Formulario enviado correctamente" })
  }

  uploadFile(file: File): Observable<any> {
    // Simular subida de archivo
    console.log("Archivo subido:", file.name)

    // En un caso real, aquí subirías el archivo a tu servidor o servicio de almacenamiento
    return of({ success: true, fileUrl: "https://ejemplo.com/archivo.pdf" })
  }
}
