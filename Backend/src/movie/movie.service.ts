import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Movie} from "@root/movie/entities/movie.entity";
import {Repository} from "typeorm";
import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";
@Injectable()
export class MovieService {
  constructor(
      @InjectRepository(Movie)
      public readonly movieRepository: Repository<Movie>,
      private readonly httpService: HttpService, //외부통신해줌,
      private readonly configService: ConfigService,
  ) {
  }

  async createMovie() {
    const { data, status } = await this.httpService.get(
        this.configService.get("MOVIE_URL"),
        {
              headers: { Authorization: this.configService.get("MOVIE_TOKEN"),}
        }).toPromise()
    if (status === 200) {
      const datas = data.results
      console.log(datas.length)
      const movieData = []
      datas?.map(data => (
          movieData.push({
            adult: data['adult'],
            title: data['title'],
            date: data['release_date'],
            video: data['video'],
            voteCount: data['vote_count']
          })
      ))
        await this.movieRepository.delete({})
      return await this.movieRepository.save(movieData)
    }
  }

}