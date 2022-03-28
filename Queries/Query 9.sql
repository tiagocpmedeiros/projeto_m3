/*Qual as 5 mortes mais populares?*/
SELECT method , count(method)
FROM got.game_of_thrones_deaths 
group by method
order by count(method) desc limit 5
