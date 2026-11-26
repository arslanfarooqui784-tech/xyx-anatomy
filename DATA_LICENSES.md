# Data sources and licences

XYX Anatomy is built on the open datasets below. Their authors and licences are credited here as their licences require.

- **bodyparts3d**: BodyParts3D 3.0 (2011-09-15), (c) The Database Center for Life Science, CC BY-SA 2.1 JP. Mitsuhashi N et al. Nucleic Acids Res 2009;37:D782-5. doi:10.1093/nar/gkn613
- **uberon**: Uberon multi-species anatomy ontology, releases/2026-11-05, CC BY 3.0. Mungall CJ et al. Genome Biol 2012;13:R5
- **cl**: Cell Ontology, cl/releases/2026-11-13/cl-basic.owl, CC BY 4.0. Diehl AD et al. J Biomed Semantics 2016;7:44
- **go**: Gene Ontology, releases/2026-11-16, CC BY 4.0. Gene Ontology Consortium, Genetics 2023;224:iyad031
- **mondo**: Mondo Disease Ontology, mondo/releases/2026-11-03/mondo-base.owl, CC BY 4.0. Vasilevsky NA et al. medRxiv 2022
- **hra**: Human Reference Atlas 3D Reference Object Library v1.3 (HuBMAP): Visible Human Female organs, Allen brain, Yao lymph node — CC BY 4.0. Börner K et al., Nature Cell Biology 2021;23:1117-28; data doi:10.48539/HBM858.DNFV.736
- **fma**: Foundational Model of Anatomy labels/hierarchy (as distributed with BodyParts3D), University of Washington, CC BY 3.0

## Licence of the 3D model files

- Files in `models/` derived from **BodyParts3D** (male body, and female structures marked `fx-` that were fitted from the male atlas) are shared under **CC BY-SA 2.1 JP**, the same licence as the original data.
- Files derived from the **Human Reference Atlas** are shared under **CC BY 4.0**.
- The anatomy database in `db/` combines Uberon, Mondo, Cell Ontology, Gene Ontology and FMA data under their licences listed above.

The app is for education only, not for diagnosis or treatment.
