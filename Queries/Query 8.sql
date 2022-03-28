/*Qual o episódio mais sangrento?*/
select tabelaEpisodios.Title, tabelaEpisodios.season_episode, count(tabelaMortes.season_episode) from game_of_thrones_deaths as tabelaMortes
inner join got_episodes_v4 as tabelaEpisodios
on tabelaMortes.season_episode = tabelaEpisodios.season_episode
group by tabelaEpisodios.season_episode 
order by count(tabelaMortes.season_episode) desc limit 1
