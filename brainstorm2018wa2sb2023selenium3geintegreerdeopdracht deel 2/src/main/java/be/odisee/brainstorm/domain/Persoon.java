package be.odisee.brainstorm.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

// @Index bij een veld is deprecated, 
// javax.persistence.Index is te gebruiken en 
// die moet als deel van @Table worden meegegeven
@Entity
@Table(name="personen",
		indexes = { @Index(name="IPersoon_naam",columnList="familienaam, voornaam"),
					@Index(name="IPersoon_email",columnList="emailadres")
				} )
public class Persoon implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) // HV 201804015 tbv Gebruik AutoIncrement
    private int id;

    @Column
    private String status;

    @Column
    private String voornaam;

    @Column
    private String familienaam;

    @Column
    private String emailadres;

    @Column
    private String paswoord;

    // we zullen nu toch een verwijzing naar Persoon in Rol moeten toevoegen
    @OneToMany(fetch=FetchType.EAGER,mappedBy="persoon")
    private Set<Rol> m_Rollen= new HashSet<Rol>();

    public Persoon(){

    }

    public Persoon(String status, String voornaam, String familienaam, String emailadres, String paswoord) {
        this.status = status;
        this.voornaam = voornaam;
        this.familienaam = familienaam;
        this.emailadres = emailadres;
        this.paswoord = paswoord;
    }

    public Persoon(int id, String status, String voornaam, String familienaam, String emailadres, String paswoord) {
        this.id = id;
        this.status = status;
        this.voornaam = voornaam;
        this.familienaam = familienaam;
        this.emailadres = emailadres;
        this.paswoord = paswoord;
    }

    public int getId() {
        return id;
    }

    public String getEmailadres() {
        return emailadres;
    }

    public String getPaswoord() {
        return paswoord;
    }

    public String getVoornaam() {
        return voornaam;
    }

    public String getFamilienaam() {
        return familienaam;
    }

    public Set<Rol> getRollen(){
        return m_Rollen;
    }

    public void setEmailadres(String emailadres) {
        this.emailadres = emailadres;
    }

    public void setFamilienaam(String familienaam) {
        this.familienaam = familienaam;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setM_Rollen(Set<Rol> m_Rollen) {
        this.m_Rollen = m_Rollen;
    }

    public void setPaswoord(String paswoord) {
        this.paswoord = paswoord;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setVoornaam(String voornaam) {
        this.voornaam = voornaam;
    }

    public Rol voegRolToe(String type, String status, String usernaam, Sessie sessie){
        Rol newRol=null;
        if (type.toLowerCase().equals("deelnemer")) newRol= new Deelnemer(status, usernaam, sessie,this);
        if (type.toLowerCase().equals("facilitator")) newRol= new Facilitator(status, usernaam, sessie,this);
        m_Rollen.add(newRol);
        return newRol;
    }

}