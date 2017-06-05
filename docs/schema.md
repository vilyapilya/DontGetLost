#Database schema: 
 
###Users:
-id                integer
-session_token	  string
-image_url		  string
-id_token ?????	  integer
 
###Groups:
-id                integer
-name   		      string
 
###Group Members
-group_id          integer
-user_id           integer
 
###Invitations:
-invitor_id        integer
-invited_id        integer
-group_id          integer
