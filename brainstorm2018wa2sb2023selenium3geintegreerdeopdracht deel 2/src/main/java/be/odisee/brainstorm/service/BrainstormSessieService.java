package be.odisee.brainstorm.service;

import be.odisee.brainstorm.domain.*;
import java.util.List;
import java.util.Optional;

public interface BrainstormSessieService {

    public List<Persoon> geefAllePersonen();

    public Persoon voegPersoonToe(String voornaam, String familienaam, String emailadres, String paswoord);

    public Persoon zoekPersoonMetId(int id);

	public Persoon zoekPersoonMetEmail(String email);
}