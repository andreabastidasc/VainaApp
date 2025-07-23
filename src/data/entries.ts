export type Meaning = {
    id: string
    label: string
    definitions: {
        es: string
        en: string
        fr: string
        pt: string
    }
    examples: {
        es: string[]
        en: string[]
        fr: string[]
        pt: string[]
    }
}

export const meanings: Meaning[] = [
    {
        id: 'objeto',
        label: 'Objeto / Cosa',
        definitions: {
            es: 'Cosa u objeto indefinido o genérico.',
            en: 'Thing or object (generic)',
            fr: 'Chose ou objet (générique)',
            pt: 'Coisa ou objeto (genérico)'
        },
        examples: {
            es: ['Pásame esa vaina que está en la mesa.'],
            en: ['Pass me that vaina (thing) on the table.'],
            fr: ['Passe-moi cette vaina (truc) sur la table.'],
            pt: ['Me passa aquela vaina (parada) em cima da mesa.']
        }
    },
    {
        id: 'problema',
        label: 'Problema / Complicación',
        definitions: {
            es: 'Situación incómoda o conflictiva.',
            en: 'Problem or trouble.',
            fr: 'Problème ou galère.',
            pt: 'Problema ou confusão.'
        },
        examples: {
            es: ['¡Qué vaina! Perdí el bus.'],
            en: ['What a vaina! (mess) I missed the bus.'],
            fr: ['Quelle vaina ! (galère) J’ai raté le bus.'],
            pt: ['Que vaina! (droga) Perdi o ônibus.']
        }
    },
    {
        id: 'tema',
        label: 'Tema / Asunto',
        definitions: {
            es: 'Asunto, cosa que se discute o trata.',
            en: 'Subject or matter being discussed.',
            fr: 'Sujet ou affaire.',
            pt: 'Assunto ou tema.'
        },
        examples: {
            es: ['No te metas en esa vaina.'],
            en: ['Don’t get involved in that vaina (issue).'],
            fr: ['Ne te mêle pas de cette vaina (affaire).'],
            pt: ['Não se mete nessa vaina (parada).']
        }
    }
]
