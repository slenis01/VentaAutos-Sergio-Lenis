import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})

export class AutosService{
    listaAutos: Auto[] = [];

    obtenListaAutos(): Auto[] {
        if ( this.listaAutos.length == 0) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos;
    }

    obtenAuto( id: number ): Auto | undefined {
        if ( this.listaAutos.length == 0) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos.find( auto => auto.id == id );
    }

    private _determinaListaAutos(): Auto[] {
        return this.listaAutos = [
            {
                id: 1,
                marca: "Renault",
                modelo: "R4",
                anio: 1984,
                color: "Blanco",
                kilometros: 130000,
                calificacion: 5,
                precio: 139000,
                imagenUrl: "../assets/1-R4.jpg"
            },
            {
                id: 2,
                marca: "LAND ROVER",
                modelo: "LAND ROVER CLASSIC",
                anio: 1984,
                color: "Rojo",
                kilometros: 150000,
                calificacion: 4.5,
                precio: 11000000,
                imagenUrl: "../assets/2-LAND-ROVER.jpg"
            },
            {
                id: 3,
                marca: "Volkswagen",
                modelo: "Escarabajo",
                anio: 1980,
                color: "Verde Oscuro",
                kilometros: 150000,
                calificacion: 4.4,
                precio: 16000000,
                imagenUrl: "../assets/3-VOLKSWAGEN.jpg"
            },
            {
                id: 4,
                marca: "Renault",
                modelo: "R12",
                anio: 1994,
                color: "Crema",
                kilometros: 160000,
                calificacion: 3.5,
                precio: 10000000,
                imagenUrl: "../assets/4-RENAULT-12.webp"
            },
            {
                id: 5,
                marca: "Mazda",
                modelo: "323",
                anio: 1998,
                color: "Amarillo",
                kilometros: 120000,
                calificacion: 2,
                precio: 1200000,
                imagenUrl: "../assets/5-Mazda-323.jpg"
            }
        ];
    }
}