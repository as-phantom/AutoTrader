import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ad.component.html',
  styleUrls: ['./find-ad.component.sass'],
})
export class FindAdComponent {
  public submitted: boolean = false;
  public isFormValid: boolean = false;

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl('', []),
    model: new FormControl('', []),
    region: new FormControl('', []),
    minPrice: new FormControl('', []),
    maxPrice: new FormControl('', []),
    condition: new FormControl('', []),
  });

  constructor() {}


  // 1 fetch all records, filter only two properties (make & model) 
  // 2 remove duplicates makes and models in order to create key-value pairs to dynamically create a dropdown list
  // create option list


  onSubmit() {
    console.log(this.formGroup.value);

    // this.submitted = true;
  }


// // Form group - Most searched for
// <option value="AUDI">Audi (2,147)</option>
// <option value="BMW">BMW (2,536)</option>
// <option value="FORD">Ford (2,744)</option>
// <option value="JAGUAR">Jaguar (466)</option>
// <option value="LAND ROVER">Land Rover (834)</option>
// <option value="MERCEDES-BENZ">Mercedes-Benz (1,738)</option>
// <option value="NISSAN">Nissan (944)</option>
// <option value="PORSCHE">Porsche (243)</option>
// <option value="TOYOTA">Toyota (914)</option>
// <option value="VAUXHALL">Vauxhall (1,660)</option>
// <option value="VOLKSWAGEN">Volkswagen (1,716)</option>
// <option value="VOLVO">Volvo (412)</option>

// // Form group - All makes
// <option value="ABARTH">Abarth (85)</option>
// <option value="ALFA ROMEO">Alfa Romeo (67)</option>
// <option value="ALPINE">Alpine (4)</option>
// <option value="ASTON MARTIN">Aston Martin (35)</option>
// <option value="AUDI">Audi (2,147)</option>
// <option value="AUSTIN">Austin (2)</option>
// <option value="BENTLEY">Bentley (41)</option>
// <option value="BMW">BMW (2,536)</option>
// <option value="CATERHAM">Caterham (2)</option>
// <option value="CHESIL">Chesil (1)</option>
// <option value="CHEVROLET">Chevrolet (29)</option>
// <option value="CHRYSLER">Chrysler (9)</option>
// <option value="CITROEN">Citroen (432)</option>
// <option value="CUPRA">CUPRA (44)</option>
// <option value="DACIA">Dacia (249)</option>
// <option value="DAEWOO">Daewoo (1)</option>
// <option value="DAIHATSU">Daihatsu (5)</option>
// <option value="DAX">DAX (1)</option>
// <option value="DODGE">Dodge (5)</option>
// <option value="DS AUTOMOBILES">DS Automobiles (124)</option>
// <option value="FERRARI">Ferrari (32)</option>
// <option value="FIAT">Fiat (589)</option>
// <option value="FORD">Ford (2,744)</option>
// <option value="HONDA">Honda (379)</option>
// <option value="HYUNDAI">Hyundai (478)</option>
// <option value="INFINITI">Infiniti (18)</option>
// <option value="ISUZU">Isuzu (8)</option>
// <option value="IVECO">Iveco (1)</option>
// <option value="JAGUAR">Jaguar (466)</option>
// <option value="JEEP">Jeep (97)</option>
// <option value="KIA">KIA (545)</option>
// <option value="LAMBORGHINI">Lamborghini (41)</option>
// <option value="LAND ROVER">Land Rover (834)</option>
// <option value="LEVC">LEVC (1)</option>
// <option value="LEXUS">Lexus (193)</option>
// <option value="LOTUS">Lotus (3)</option>
// <option value="MASERATI">Maserati (27)</option>
// <option value="MAZDA">Mazda (326)</option>
// <option value="MCLAREN">McLaren (6)</option>
// <option value="MERCEDES-BENZ">Mercedes-Benz (1,738)</option>
// <option value="MG">MG (62)</option>
// <option value="MINI">MINI (728)</option>
// <option value="MITSUBISHI">Mitsubishi (180)</option>
// <option value="MORRIS">Morris (1)</option>
// <option value="NISSAN">Nissan (944)</option>
// <option value="OPEL">Opel (1)</option>
// <option value="PERODUA">Perodua (1)</option>
// <option value="PEUGEOT">Peugeot (779)</option>
// <option value="PORSCHE">Porsche (243)</option>
// <option value="RENAULT">Renault (535)</option>
// <option value="ROLLS-ROYCE">Rolls-Royce (5)</option>
// <option value="ROVER">Rover (2)</option>
// <option value="SAAB">Saab (14)</option>
// <option value="SEAT">SEAT (418)</option>
// <option value="SKODA">SKODA (474)</option>
// <option value="SMART">Smart (120)</option>
// <option value="SSANGYONG">Ssangyong (31)</option>
// <option value="SUBARU">Subaru (31)</option>
// <option value="SUZUKI">Suzuki (258)</option>
// <option value="TESLA">Tesla (18)</option>
// <option value="TOYOTA">Toyota (914)</option>
// <option value="TVR">TVR (1)</option>
// <option value="VAUXHALL">Vauxhall (1,660)</option>
// <option value="VOLKSWAGEN">Volkswagen (1,716)</option>
// <option value="VOLVO">Volvo (412)</option>
// <option value="YAMAHA">Yamaha (1)</option>

  

}
