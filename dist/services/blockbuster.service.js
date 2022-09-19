"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockbusterService = void 0;
const axios_1 = __importDefault(require("axios"));
const Blockbuster_1 = __importDefault(require("../db/models/Blockbuster"));
const url = `http://www.omdbapi.com/?t=`;
const apiKey = `8c217066`;
class BlockbusterService {
    constructor(blockbusterModel) {
        this.blockbusterModel = blockbusterModel;
    }
    //-----------------Metodo para traer peliculas de Base de Datos-----
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const blockbusterRows = yield Blockbuster_1.default.findAll();
            console.log(blockbusterRows.length);
            return blockbusterRows;
        });
    }
    //------------Metodo para llenar Base de Datos-------
    fullDataBase(MoviesArr) {
        return __awaiter(this, void 0, void 0, function* () {
            MoviesArr.map((e) => __awaiter(this, void 0, void 0, function* () {
                let films = yield axios_1.default.get(url, { params: { t: e, apikey: apiKey } });
                const { Title: name, Year: year, Genre: genre, Poster: poster, Country: country, } = films.data;
                yield this.insertOne({
                    name,
                    year,
                    genre,
                    poster,
                    country,
                });
            }));
            return;
        });
    }
    //  async insertMany (listOfFilms:Movie[]){
    //   const filtMovies: any = listOfFilms.filter((c) => c !== undefined);
    //   await  Blockbuster.bulkCreate(filtMovies, { validate: true });
    //  }
    insertOne(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Blockbuster_1.default.create(movie, { validate: true });
        });
    }
}
exports.BlockbusterService = BlockbusterService;