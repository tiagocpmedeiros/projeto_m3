-- 14: Qual episódio e temporada com mais visualizações?
Select Title as Título, Season as Temporada, Episode as Episódio, US_Viewers as Telespectadores 
from  got_episodes_v4 order by US_Viewers desc ;