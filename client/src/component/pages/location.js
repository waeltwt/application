import React from "react";
import Card from 'react-bootstrap/Card';
import './location.css'

import Button from 'react-bootstrap/Button';
const Location = () => {
	return (
		<div className="dd" >
			<table >
				<tr>
					<td>
						<Card
							border="danger"
							style={{ width: '35rem' }} >
							<Card.Img variant="top" src="https://lepetitjournal.com/sites/default/files/2020-06/DJERBA%20PERLE%20DE%20MEDITERRANEE.jpg" />
							<Card.Body >
								<Card.Title>Djerba</Card.Title>
								<Card.Text className="aa"  >
									Djerba est une île de la côte tunisienne connue pour ses plages méditerranéennes et ses villes blanches du désert influencées par les cultures berbère, arabe, juive et africaine. Sa ville principale est Houmt Souk. Elle est réputée pour ses marchés artisanaux, son port de pêche et sa forteresse du XVIe siècle, Borj el Kebir. Au sud se trouve la synagogue El Ghriba, un lieu de pèlerinage pour les Juifs
								</Card.Text>

							</Card.Body>
						</Card></td>
					<td>

						<Card border="success" style={{ width: '35rem' }}>
							<Card.Img variant="top" src="https://soussemade.com/wp-content/uploads/2021/05/plage-sousse-boujaafar.jpg" />
							<Card.Body>
								<Card.Title>Sousse</Card.Title>
								<Card.Text className="aa">
									Grande station balnéaire et ville d’histoire, Sousse a deux visages. Profitez des immenses plages de Sousse et Port El Kantaoui, sortez au restaurant ou au night-club… Ou visitez l’exceptionnelle médina, inscrite au Patrimoine mondial par l’Unesco, et d’autres magnifiques villes historiques aux environs.
								</Card.Text>

							</Card.Body>
						</Card></td>
				</tr>


				<tr> <td>
					<Card border="info" style={{ width: '35rem' }}>
						<Card.Img variant="top" src="https://kapitalis.com/tunisie/wp-content/uploads/2022/09/Anantara-Resort-Tozeur.jpg" />
						<Card.Body>
							<Card.Title>Tozeur</Card.Title>
							<Card.Text className="aa">
								Villes surgies du désert et blotties contre d’immenses palmeraies, Tozeur et Nefta surprennent, fascinent et plongent dans le dépaysement. La lumière brûlante du Sahara s’y déverse dans les ruelles des vieux quartiers, entre les hautes façades de briques blondes. A Tozeur, palaces, parcs à thème et musées ont fleuri autour de la vieille ville.
							</Card.Text>

						</Card.Body>
					</Card></td>
					<td>

						<Card border="dark" style={{ width: '35rem' }}>
							<Card.Img variant="top" src="https://carthagemagazine.com/wp-content/uploads/2020/09/Camping-in-Tunisia-Bni-Mtir-Bizerte-Tunisia.jpg" />
							<Card.Body>
								<Card.Title>Bizerte</Card.Title>
								<Card.Text className="aa">
									Situé dans le Nord-Ouest de la Tunisie, Cap Serrat se trouve entre Sejnane et Tabarka et face de l’archipel de La Galite. C’est l’une des parties les plus appréciées du littoral de Bizerte.
								</Card.Text>

							</Card.Body>
						</Card></td>
				</tr>


			</table>
		</div>



	);
};

export default Location;