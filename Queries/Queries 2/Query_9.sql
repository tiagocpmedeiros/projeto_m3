--  9: Quais os Episódios com Votação acima de 9?
select Season as Temporada, Episode as Episódio, Title as Título, Rating as Nota
from  got_episodes_v4 as a
left join  houses_v1 as b on a.Summary = b.House_name
where Rating >=9
limit 10;